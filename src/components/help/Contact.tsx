import React from "react";
import { contacts } from "@/data/help";

const Contact = () => {
  return (
    <div className="grid grid-cols-1 gap-4 w-full sm:w-auto">
      <div className="bg-white p-6 flex flex-col gap-5 rounded-2xl">
        <h2 className="font-bold text-2xl">Контакты</h2>

        <div className="flex flex-col gap-4">
          {contacts.map(({ id, icon: Icon, bg, label, value, link }) => (
            <div key={id} className="flex gap-3 items-center">
              <div
                className={`${bg} rounded-lg text-white text-[24px] flex items-center justify-center`}
              >
                <Icon />
              </div>
              <div className="border-b w-full pb-4">
                <p className="text-xs text-[#616161]">{label}</p>
                <a href={link} className="text-base font-bold text-[#0B0C0B]">
                  {value}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
