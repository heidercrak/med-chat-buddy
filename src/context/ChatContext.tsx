
import React, { createContext, useContext, useReducer } from "react";
import { processUserSymptoms, getInitialBotMessage } from "../utils/symptomMatcher";

export interface Message {
  id: string;
  content: string;
  sender: "bot" | "user";
  timestamp: Date;
  isEmergency?: boolean;
}

interface ChatState {
  messages: Message[];
  isProcessing: boolean;
}

type ChatAction = 
  | { type: "ADD_USER_MESSAGE"; payload: string }
  | { type: "ADD_BOT_MESSAGE"; payload: Message }
  | { type: "SET_PROCESSING"; payload: boolean };

interface ChatContextType {
  state: ChatState;
  sendMessage: (message: string) => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

const initialState: ChatState = {
  messages: [
    {
      id: "initial",
      content: getInitialBotMessage(),
      sender: "bot",
      timestamp: new Date(),
      isEmergency: false
    }
  ],
  isProcessing: false
};

const chatReducer = (state: ChatState, action: ChatAction): ChatState => {
  switch (action.type) {
    case "ADD_USER_MESSAGE":
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: Date.now().toString(),
            content: action.payload,
            sender: "user",
            timestamp: new Date()
          }
        ]
      };
    case "ADD_BOT_MESSAGE":
      return {
        ...state,
        messages: [...state.messages, action.payload]
      };
    case "SET_PROCESSING":
      return {
        ...state,
        isProcessing: action.payload
      };
    default:
      return state;
  }
};

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(chatReducer, initialState);

  const sendMessage = async (message: string) => {
    // Add user message to chat
    dispatch({ type: "ADD_USER_MESSAGE", payload: message });
    
    // Set processing state
    dispatch({ type: "SET_PROCESSING", payload: true });
    
    // Process the message and get response
    setTimeout(async () => {
      try {
        // Wait for the Promise to resolve
        const response = await processUserSymptoms(message);
        
        // Now we can safely access properties on the resolved response
        dispatch({
          type: "ADD_BOT_MESSAGE",
          payload: {
            id: Date.now().toString(),
            content: response.message,
            sender: "bot",
            timestamp: new Date(),
            isEmergency: response.isEmergency
          }
        });
      } catch (error) {
        console.error("Error processing symptoms:", error);
        dispatch({
          type: "ADD_BOT_MESSAGE",
          payload: {
            id: Date.now().toString(),
            content: "Lo siento, ocurrió un error al procesar tu consulta. Por favor, intenta nuevamente.",
            sender: "bot",
            timestamp: new Date(),
            isEmergency: false
          }
        });
      } finally {
        // Set processing state back to false
        dispatch({ type: "SET_PROCESSING", payload: false });
      }
    }, 1000); // Simulated delay for natural conversation feel
  };

  return (
    <ChatContext.Provider value={{ state, sendMessage }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = (): ChatContextType => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
};
