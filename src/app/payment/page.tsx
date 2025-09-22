import React from "react";
import { BsReply } from "react-icons/bs";

const PaymentPage = () => {
  return (
    <div>
      <button className="border py-2 px-8 rounded-4xl text-base text-[#0B0C0B] flex justify-items-center items-center gap-2">
        <BsReply className="w-5 h-5" /> Перейти назад
      </button>

      <div className="father flex gap-5 mt-4">
        <div className=" border p-5 rounded-2xl bg-white">
          <h4>Контактные данные</h4>
        </div>
        <div className="border p-5 rounded-2xl bg-white">right</div>
      </div>
    </div>
  );
};
// test

export default PaymentPage;
