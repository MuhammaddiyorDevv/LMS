import React from "react";
import Image from "next/image";

import { HiOutlineChat } from "react-icons/hi";
import { PiChatTeardropTextBold } from "react-icons/pi";

const Chat = () => {
  return (
    <div className="bg-white p-4 flex h-full flex-col gap-5 w-[492px] rounded-2xl">
      <div className="bg-[#F6F6F6] h-full p-9 rounded-2xl flex items-center justify-center  flex-col">
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
        <h2 className="mt-4 font-bold leading-6 text-[#0B0C0B] text-[20px] whitespace-nowrap flex items-center gap-2">
          <HiOutlineChat className="text-[20px] font-bold border- border-white " />
          Свяжитесь с нами – мы вам поможем!
        </h2>
        <p className="text-center text-[14px] font-normal text-[#616161] pt-3">
          У вас есть вопросы? Мы готовы помочь! Свяжитесь с нашей службой
          поддержки, и мы быстро решим ваши проблемы.
        </p>
        <button className="px-5 py-[11px] flex rounded-4xl mt-4 mb-25 bg-[#567D4A] text-white font-semibold text-xs items-center gap-2">
          <PiChatTeardropTextBold className="w-4 h-4" />
          Начать чат
        </button>
      </div>
    </div>
  );
};

export default Chat;
