
import React from 'react';
import { cn } from '@/lib/utils';
import { Message as MessageType } from '../context/ChatContext';
import { AlertTriangle } from 'lucide-react';

interface MessageProps {
  message: MessageType;
}

const Message: React.FC<MessageProps> = ({ message }) => {
  const { content, sender, isEmergency } = message;

  // Function to convert markdown-like text to HTML
  const formatMessage = (text: string) => {
    // Handle bold text
    let formattedText = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Handle line breaks
    formattedText = formattedText.replace(/\n/g, '<br />');
    
    return formattedText;
  };

  return (
    <div 
      className={cn(
        "mb-4 animate-message-fade-in opacity-0 max-w-[80%]",
        sender === "user" 
          ? "ml-auto bg-medicalBlue-dark text-white rounded-tl-lg rounded-tr-lg rounded-bl-lg p-3" 
          : "mr-auto bg-white border border-gray-200 rounded-tl-lg rounded-tr-lg rounded-br-lg p-3 shadow-sm"
      )}
    >
      {isEmergency && (
        <div className="flex items-center text-red-600 mb-2">
          <AlertTriangle className="w-5 h-5 mr-2" />
          <span className="font-bold">Atención médica recomendada</span>
        </div>
      )}
      <div 
        className="text-sm"
        dangerouslySetInnerHTML={{ __html: formatMessage(content) }}
      />
    </div>
  );
};

export default Message;
