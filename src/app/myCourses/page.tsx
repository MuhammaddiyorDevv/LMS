import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="text-[24px] font-semibold">Мои курсы</h1>
      <div className="flex gap-3 mt-3">
        <button
          className="py-3 px-5 bg-[#567D4A] rounded-[10px] text-white"
          aria-label=""
        >
          Мои курсы
        </button>
        <button className="bg-[#F6F6F6] py-3 px-5 rounded-[10px]" aria-label="">
          Архив
        </button>
      </div>
    </div>
  );
};

export default page;
