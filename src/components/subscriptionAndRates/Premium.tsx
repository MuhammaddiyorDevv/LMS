import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Premium = () => {
  const features = [
    "Доступ к видеокурсам – 5",
    "Участие в вебинарах – 4",
    "Сдача тестов после курса – Да",
    "Получение сертификата – Нет",
    "Активный сеанс – 1",
  ];

  return (
    <div className="border rounded-2xl p-5 bg-[#D9A055] text-white">
      <h2 className="text-lg font-bold">Premium 👑</h2>
      <div className="mt-5">
        <p className="text-sm text-[#F6F6F6]">за месяц</p>
        <h2 className="font-bold text-xl">
          2 100 000 UZS
          <span className="text-sm line-through opacity-70 ml-1">
            3 000 000 UZS
          </span>
        </h2>
        <p className="mt-3 text-sm">
          Идеальный тариф для начинающих <br /> пользователей.
        </p>
        <hr className="mt-6 text-[#E5E5E5]" />

        <div className="mt-6">
          <h2 className="font-bold text-base">Функции</h2>
          <div className="mt-2.5 space-y-2.5">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <FaCheckCircle className="h-5 w-5 text-white" />
                <p className="text-sm">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        <button className="mt-7 py-4 w-full rounded-3xl font-medium bg-white text-[#0B0C0B]">
          Открыть доступ
        </button>
      </div>
    </div>
  );
};

export default Premium;
