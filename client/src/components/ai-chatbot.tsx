import { useState } from "react";
import { motion } from "framer-motion";
import { Bot, Send, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export default function AIchatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm here to help you understand how AirBox solutions can transform your business. What's your main challenge?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputText),
        isBot: true,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes("logistics") || input.includes("tracking") || input.includes("courier")) {
      return "Perfect! Our Kurir Pintar solution provides end-to-end supply chain visibility. It integrates with air, sea, and land transport modes to give you complete tracking capabilities. Would you like to know more about specific features?";
    }
    
    if (input.includes("hr") || input.includes("employee") || input.includes("staff")) {
      return "Great! Kru Pintar is our HRIS solution that simplifies the employment lifecycle for high-volume teams. It ensures compliance and automation for recruitment, onboarding, and performance management. What specific HR challenges are you facing?";
    }
    
    if (input.includes("accounting") || input.includes("finance") || input.includes("tax")) {
      return "Excellent! Jurnal Pintar is our smart accounting system with modular setup and local tax compliance. It supports automation and analytics to streamline your financial operations. What accounting processes do you want to improve?";
    }
    
    if (input.includes("dashboard") || input.includes("monitoring") || input.includes("analytics")) {
      return "Our Interactive Dashboard & Task Monitoring solution provides real-time insights into your operations. You can track KPIs, monitor task progress, and make data-driven decisions. What metrics are most important for your business?";
    }
    
    return "That's interesting! Based on your needs, I'd recommend starting with a strategic consultation to assess your current systems and identify the best AirBox solutions for your organization. Would you like to schedule a free consultation with our experts?";
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 h-96 flex flex-col">
      <div className="bg-blue-600 text-white p-4 rounded-t-xl">
        <h4 className="font-semibold flex items-center">
          <Bot className="w-5 h-5 mr-2" />
          AirBox AI Consultant
          <span className="ml-auto w-3 h-3 bg-green-400 rounded-full"></span>
        </h4>
      </div>
      
      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        {messages.map((message) => (
          <motion.div
            key={message.id}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className={`flex items-start space-x-3 ${message.isBot ? "" : "justify-end"}`}
          >
            {message.isBot && (
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">
                <Bot className="w-4 h-4" />
              </div>
            )}
            
            <div className={`rounded-lg p-3 max-w-xs ${
              message.isBot 
                ? "bg-slate-100 text-slate-800" 
                : "bg-blue-600 text-white"
            }`}>
              <p className="text-sm">{message.text}</p>
            </div>
            
            {!message.isBot && (
              <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">
                <User className="w-4 h-4" />
              </div>
            )}
          </motion.div>
        ))}
        
        {isTyping && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex items-start space-x-3"
          >
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm">
              <Bot className="w-4 h-4" />
            </div>
            <div className="bg-slate-100 rounded-lg p-3 max-w-xs">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
      
      <div className="p-4 border-t border-slate-100">
        <div className="flex space-x-2">
          <Input
            type="text"
            placeholder="Type your message..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 text-sm"
          />
          <Button
            onClick={sendMessage}
            disabled={!inputText.trim()}
            className="bg-blue-600 hover:bg-blue-700"
            size="sm"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}