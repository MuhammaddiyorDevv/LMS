import React from "react";
import { cards } from "@/data/help";

const Help = () => {
  return (
    <div className="bg-white rounded-2xl p-5">
      <h2 className="text-2xl font-bold">Нужна помощь? Мы рядом! 😊</h2>
      <p className="text-gray-600 mb-6">
        Возможно, вы найдете ответы в наших коллекциях.
      </p>

      <div className="grid grid-cols-2 gap-5">
        {cards.map(({ id, title, desc, icon: Icon, bg }) => (
          <div
            key={id}
            className="border border-[#E5E5E5] rounded-2xl flex flex-col items-center justify-center py-9 px-6 text-center hover:shadow-xl transition-all duration-500 ease-in-out transform hover:scale-105 cursor-pointer"
          >
            <div
              className={`inline-flex items-center justify-center p-1.5 w-9 h-9 rounded-[8px] ${bg} text-white`}
            >
              <Icon size={24} />
            </div>

            <div className="mt-4">
              <h4 className="font-bold text-[#0B0C0B] text-base">{title}</h4>
              <p className="text-[#616161] text-xs mt-1">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Help;
