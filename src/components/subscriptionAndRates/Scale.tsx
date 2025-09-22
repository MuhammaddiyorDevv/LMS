import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Scale = () => {
  const features = [
    "Доступ к видеокурсам – 12",
    "Участие в вебинарах – 7",
    "Сдача тестов после курса – Да",
    "Получение сертификата – Да",
    "Активный сеанс – 2",
  ];

  return (
    <div className="border rounded-2xl p-5 bg-white text-[#0B0C0B]">
      <h2 className="text-lg font-bold">Scale 📈</h2>
      <div className="mt-5">
        <p className="text-sm text-[#616161]">за месяц</p>
        <h2 className="font-bold text-xl">770 000 UZS</h2>
        <p className="mt-3 text-sm">
          Больше возможностей, расширенный доступ и гибкость в обучении.
        </p>
        <hr className="mt-6 text-[#E5E5E5]" />

        <div className="mt-6">
          <h2 className="font-bold text-base">Функции</h2>
          <div className="mt-2.5 space-y-2.5">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <FaCheckCircle className="h-5 w-5" />
                <p className="text-sm">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        <button className="mt-7 py-4 w-full rounded-3xl font-medium bg-[#567D4A] text-white">
          Открыть доступ
        </button>
      </div>
    </div>
  );
};

export default Scale;
