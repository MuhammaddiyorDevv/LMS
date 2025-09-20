"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, LogOut } from "lucide-react";
import { Message } from "@/types/help";

const ChatInterface = ({ onClose }: { onClose: () => void }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "👋 Salom ! Qanday yordam bera olaman ?",
      isUser: false,
      timestamp: "16:34",
    },
    {
      id: 2,
      text: "Menda kurslarni boshlash bilan muammo bo'lmoqda",
      isUser: true,
      timestamp: "16:35",
    },
  ]);
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputText.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        text: inputText,
        isUser: true,
        timestamp: new Date().toLocaleTimeString("ru-RU", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages([...messages, newMessage]);
      setInputText("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="bg-white rounded-2xl w-full h-[535px] flex flex-col">
      <div className="flex items-center mb-2 justify-between p-2 bg-[#F6F6F6] rounded-[12px] flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Image
              src="/Images/Avatar_help1.svg"
              alt="Support"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <span className="font-semibold text-[#0B0C0B]">Support</span>
        </div>
        <button
          onClick={onClose}
          className="flex items-center gap-2 bg-[#DB5962] text-white px-5 py-2 rounded-[44px] hover:bg-red-600 transition-colors cursor-pointer"
        >
          <LogOut />
          <span className="text-sm">Завершить чат</span>
        </button>
      </div>

      <div className="flex-1 min-h-0 p-4 rounded-t-[12px] overflow-y-auto bg-[#f6f6f6]">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.isUser ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-xs sm:max-w-sm lg:max-w-md px-4 py-3 rounded-2xl ${
                  message.isUser
                    ? "bg-blue-500 text-white rounded-br-md"
                    : "bg-white text-gray-800 rounded-bl-md shadow-sm"
                }`}
              >
                <p className="text-sm break-words">{message.text}</p>
                <p
                  className={`text-xs mt-1 ${
                    message.isUser ? "text-blue-100" : "text-gray-500"
                  }`}
                >
                  {message.timestamp}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 flex-shrink-0 rounded-b-[12px] bg-[#f6f6f6]">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type here..."
            className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputText.trim()}
            className="bg-blue-500 text-white p-3 rounded-xl hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed cursor-pointer transition-colors"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
