
import React, { useState, useEffect } from 'react';
import { MessageSquare, Send, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface Message {
  id: number;
  text: string;
  sender: 'bot' | 'user';
}

const initialMessages: Message[] = [
  {
    id: 1,
    text: 'Hi there! 👋 Welcome to Decexperts. How can I help you today?',
    sender: 'bot',
  },
  {
    id: 2,
    text: 'Are you looking for construction estimating services, quantity takeoffs, or something else?',
    sender: 'bot',
  },
];

const responseMap: { [key: string]: string } = {
  'hello': 'Hi there! How can I help with your construction estimating needs?',
  'hi': 'Hello! How can I assist you with your construction project today?',
  'estimate': 'We provide detailed construction estimates for projects of all sizes! Would you like a free quote?',
  'takeoff': 'Our quantity takeoff services are comprehensive and accurate. Would you like more information?',
  'pricing': 'Our pricing depends on the scope and complexity of your project. Would you like a custom quote?',
  'cost': 'We offer competitive pricing for our services. Would you like us to contact you with more details?',
  'residential': 'We handle residential projects of all sizes, from small renovations to custom homes!',
  'commercial': 'Our team has extensive experience with commercial construction projects. What type of commercial project are you working on?',
  'contact': 'You can reach us at info@decexperts.com or call (555) 123-4567. Would you like us to contact you instead?',
  'quote': 'I can help you get a free quote! Could you provide some basic information about your project?',
};

const getResponse = (message: string): string => {
  const lowerMessage = message.toLowerCase();
  
  // Check if any keywords match
  for (const [keyword, response] of Object.entries(responseMap)) {
    if (lowerMessage.includes(keyword)) {
      return response;
    }
  }
  
  // Default response if no keywords match
  return "Thanks for your message! Would you like to speak with one of our estimating specialists? I can have someone contact you.";
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const [showChatbot, setShowChatbot] = useState(false);

  // Show chatbot after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowChatbot(true);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;
    
    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: newMessage,
      sender: 'user',
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setNewMessage('');
    
    // Simulate bot response after a short delay
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getResponse(newMessage),
        sender: 'bot',
      };
      
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  if (!showChatbot) return null;

  return (
    <div className="chatbot-container">
      {/* Chatbot Button */}
      <div 
        className="chatbot-button"
        onClick={toggleChatbot}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </div>
      
      {/* Chatbot Panel */}
      {isOpen && (
        <div className="chatbot-panel absolute">
          <div className="chatbot-header">
            <h3 className="text-lg">Decexperts Assistant</h3>
          </div>
          
          <div className="chatbot-messages">
            {messages.map((message) => (
              <div 
                key={message.id}
                className={`mb-3 ${
                  message.sender === 'bot' 
                    ? 'text-left' 
                    : 'text-right'
                }`}
              >
                <div
                  className={`inline-block p-3 rounded-lg max-w-[80%] ${
                    message.sender === 'bot'
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-brand-600 text-white'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          
          <div className="chatbot-input">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 border rounded-l-md p-2 outline-none"
            />
            <Button 
              onClick={handleSendMessage}
              className="bg-brand-600 text-white p-2 rounded-r-md"
            >
              <Send size={18} />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
