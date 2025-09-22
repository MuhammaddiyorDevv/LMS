import React from "react";
import Launch from "@/components/subscriptionAndRates/Launch";
import Scale from "@/components/subscriptionAndRates/Scale";
import Premium from "@/components/subscriptionAndRates/Premium";

const Page = () => {
  return (
    <div className="bg-white rounded-2xl p-6">
      <h1 className="text-[#0B0C0B] text-2xl font-bold">Подписка и тарифы</h1>
      <div className="grid grid-cols-1 gap-5 mt-5 sm:grid-cols-2 lg:grid-cols-3">
        <Launch />
        <Scale />
        <Premium />
      </div>
    </div>
  );
};

export default Page;
