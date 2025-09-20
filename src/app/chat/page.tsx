"use client";

import React from "react";
import ChatInterface from "@/components/help/ChatInterface";

const ChatPage = () => {
  const handleCloseChat = () => {
    // Navigate back to help page
    if (typeof window !== "undefined") {
      window.history.back();
    }
  };

  return (
    <div className="min-h-screen bg-[#F6F6F6] p-4">
      <div className="max-w-4xl mx-auto h-screen">
        <ChatInterface onClose={handleCloseChat} />
      </div>
    </div>
  );
};

export default ChatPage;
