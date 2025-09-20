"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { PiChatTeardropTextBold } from "react-icons/pi";
import ChatInterface from "./ChatInterface";

const Chat = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const router = useRouter();

  const handleStartChat = () => {
    if (typeof window !== "undefined" && window.innerWidth < 640) {
      router.push("/chat");
    } else {
      setIsChatOpen(true);
    }
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
  };

  if (isChatOpen) {
    return (
      <div className="bg-white p-4 flex h-full flex-col gap-5 rounded-2xl w-full sm:w-auto">
        <ChatInterface onClose={handleCloseChat} />
      </div>
    );
  }

  return (
    <div className="bg-white p-4 flex h-[535px] flex-col gap-5 rounded-2xl w-full sm:w-auto">
      <div className="bg-[#F6F6F6] h-full p-9 rounded-2xl flex items-center justify-center flex-col">
        <div className="flex -space-x-3 mt-28">
          <Image
            src="/Images/Avatar_help1.svg"
            alt="Avatar 1"
            width={48}
            height={48}
            className="rounded-full border-2 border-white"
          />
          <Image
            src="/Images/Avatar_help2.svg"
            alt="Avatar 2"
            width={48}
            height={48}
            className="rounded-full border-2 border-white"
          />
          <Image
            src="/Images/Avatar_help3.svg"
            alt="Avatar 3"
            width={48}
            height={48}
            className="rounded-full border-2 border-white"
          />
        </div>
        <h2 className="mt-4 font-bold leading-6 text-[#0B0C0B] text-[20px] text-center flex items-center gap-2">
          💬 Свяжитесь с нами – мы вам поможем!
        </h2>
        <p className="text-center text-[14px] font-normal text-[#616161] pt-3">
          У вас есть вопросы? Мы готовы помочь! Свяжитесь с нашей службой
          поддержки, и мы быстро решим ваши проблемы.
        </p>
        <button
          onClick={handleStartChat}
          className="px-5 py-[11px] flex rounded-4xl mt-4 mb-25 bg-[#567D4A] text-white font-semibold text-xs items-center gap-2 hover:bg-[#4a6b3e] transition-colors cursor-pointer"
        >
          <PiChatTeardropTextBold className="w-4 h-4" />
          Начать чат
        </button>
      </div>
    </div>
  );
};

export default Chat;
