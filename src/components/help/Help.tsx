import React from "react";
import { FaChessBoard } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineShield, MdOutlineVideoLibrary } from "react-icons/md";
import { BsCameraVideo } from "react-icons/bs";
import { TbLayoutDistributeHorizontal } from "react-icons/tb";
import { IoIosHelpCircleOutline } from "react-icons/io";

const Help = () => {
  const cards = [
    {
      id: 1,
      title: "Getting start",
      desc: "3D Master Class — это динамичный и захватывающий",
      icon: <FaChessBoard size={36} className="text-[#006ADC]" />,
      bg: "",
      iconSmall: false,
    },
    {
      id: 2,
      title: "Account settings",
      desc: "3D Master Class — это динамичный и захватывающий",
      icon: <IoSettingsOutline size={24} />,
      bg: "bg-[#D9A055]",
      iconSmall: true,
    },
    {
      id: 3,
      title: "Safety & security",
      desc: "3D Master Class — это динамичный и захватывающий",
      icon: <MdOutlineShield size={24} />,
      bg: "bg-black",
      iconSmall: true,
    },
    {
      id: 4,
      title: "Вебинары",
      desc: "3D Master Class — это динамичный и захватывающий",
      icon: <BsCameraVideo size={24} />,
      bg: "bg-[#19A7B0]",
      iconSmall: true,
    },
    {
      id: 5,
      title: "Курсы",
      desc: "3D Master Class — это динамичный и захватывающий",
      icon: <MdOutlineVideoLibrary size={24} />,
      bg: "bg-[#1536E3]",
      iconSmall: true,
    },
    {
      id: 6,
      title: "Interface",
      desc: "3D Master Class — это динамичный и захватывающий",
      icon: <TbLayoutDistributeHorizontal size={24} />,
      bg: "bg-[#567D4A]",
      iconSmall: true,
    },
    {
      id: 7,
      title: "F.A.Q",
      desc: "3D Master Class — это динамичный и захватывающий",
      icon: <IoIosHelpCircleOutline size={24} />,
      bg: "bg-[#D54424]",
      iconSmall: true,
    },
    {
      id: 8,
      title: "Billing",
      desc: "3D Master Class — это динамичный и захватывающий",
      icon: <BsCameraVideo size={24} />,
      bg: "bg-[#DB5962]",
      iconSmall: true,
    },
  ];

  return (
    <div className="bg-white rounded-2xl p-5">
      <h2 className="text-2xl font-bold">Нужна помощь? Мы рядом! 😊</h2>
      <p className="text-gray-600 mb-6">
        Возможно, вы найдете ответы в наших коллекциях.
      </p>

      <div className="grid grid-cols-2 gap-5">
        {cards.map((card) => (
          <div
            key={card.id}
            className="border border-[#E5E5E5] rounded-2xl flex items-center justify-center flex-col py-9 px-9"
          >
            <div className="inline-flex items-center justify-center rounded-xl">
              {card.iconSmall ? (
                <div
                  className={`inline-flex items-center justify-center p-2 ${card.bg} rounded-xl text-white`}
                >
                  {card.icon}
                </div>
              ) : (
                card.icon
              )}
            </div>
            <div className="mt-4 flex items-center justify-center flex-col text-center">
              <h4 className="font-bold text-[#0B0C0B] text-base">
                {card.title}
              </h4>
              <p className="text-[#616161] text-xs">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Help;
