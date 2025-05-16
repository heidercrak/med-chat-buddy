
import React, { useState, useEffect, useRef } from 'react';
import { useChat } from '../context/ChatContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send } from 'lucide-react';
import Message from './Message';

const ChatInterface: React.FC = () => {
  const { state, sendMessage } = useChat();
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;
    
    sendMessage(inputValue);
    setInputValue('');
  };

  // Scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [state.messages]);

  return (
    <div className="flex flex-col h-full border border-gray-200 rounded-lg overflow-hidden shadow-md bg-medicalBlue-light">
      <div className="bg-medicalBlue-dark text-white p-4 flex items-center">
        <div className="w-3 h-3 rounded-full bg-medicalGreen-light mr-2"></div>
        <h2 className="font-medium">MediBot - Asistente Médico Virtual</h2>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
        <div className="space-y-2">
          {state.messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
          {state.isProcessing && (
            <div className="flex space-x-2 p-3 bg-white border border-gray-200 rounded-lg w-fit">
              <div className="w-2 h-2 rounded-full bg-gray-300 animate-pulse"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 rounded-full bg-gray-300 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="border-t border-gray-200 p-4 bg-white">
        <div className="flex gap-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Describe tus síntomas..."
            className="flex-1"
            disabled={state.isProcessing}
          />
          <Button 
            type="submit" 
            disabled={state.isProcessing || inputValue.trim() === ''}
            className="bg-medicalBlue-dark hover:bg-blue-700"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ChatInterface;
