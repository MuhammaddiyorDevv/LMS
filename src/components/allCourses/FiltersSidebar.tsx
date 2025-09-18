"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MdOutlineReplay, MdExpandMore, MdExpandLess } from "react-icons/md";
import PriceRangeSlider from "./PriceRangeSlider";
import "../../styles/custom-checkbox.css";

interface FiltersSidebarProps {
  priceRange: { min: number; max: number };
  onPriceChange: (min: number, max: number) => void;
}

const FiltersSidebar: React.FC<FiltersSidebarProps> = ({ onPriceChange }) => {
  const [expandedAccordions, setExpandedAccordions] = useState<number[]>([]);

  const toggleAccordion = (index: number) => {
    setExpandedAccordions((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <div className="w-[25%] h-auto border-[1px] rounded-[16px] border-[#E5E5E5]">
      {/* Filters Header */}
      <div className="flex justify-between items-center p-4 border-b-[1px] border-b-[#F2F1F5]">
        <h1 className="font-semibold">Филтры</h1>
        <MdOutlineReplay size={20} />
      </div>

      {/* Filters Content */}
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h5 className="font-semibold text-[14px]">Толко премиум</h5>
          <Image src="/Images/Switch.svg" alt="Switch" width={24} height={24} />
        </div>
        <hr className="text-[#F2F1F5] mb-4" />

        {/* Accordion 1: Ценовой диапазон */}
        <div className="mb-4">
          <button
            onClick={() => toggleAccordion(0)}
            className="w-full flex justify-between items-center p-3 cursor-pointer"
          >
            <span className="font-semibold text-[14px] text-gray-800">
              Ценовой диапазон
            </span>
            {expandedAccordions.includes(0) ? (
              <MdExpandLess size={20} />
            ) : (
              <MdExpandMore size={20} />
            )}
          </button>
          {expandedAccordions.includes(0) && (
            <div className="mt-2 bg-white rounded-lg">
              <PriceRangeSlider
                min={0}
                max={10000000}
                step={100000}
                priceGap={500000}
                onPriceChange={onPriceChange}
              />
            </div>
          )}
        </div>

        <hr className="text-[#F2F1F5] mb-4" />

        {/* Accordion 2: По специализации */}
        <div className="mb-4">
          <button
            onClick={() => toggleAccordion(4)}
            className="w-full flex justify-between items-center p-3 cursor-pointer"
          >
            <span className="font-semibold text-[14px] text-gray-800">
              По специализации
            </span>
            {expandedAccordions.includes(4) ? (
              <MdExpandLess size={20} />
            ) : (
              <MdExpandMore size={20} />
            )}
          </button>
          {expandedAccordions.includes(4) && (
            <div className="mt-2 p-3 bg-white rounded-lg">
              <div className="space-y-2">
                <label className="container">
                  <input type="checkbox" defaultChecked />
                  <span className="checkmark"></span>
                  <span className="text-sm text-gray-700">
                    Все специализации
                  </span>
                </label>
                <label className="container">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  <span className="text-sm text-gray-700">
                    IT и программирование
                  </span>
                </label>
                <label className="container">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  <span className="text-sm text-gray-700">
                    Дизайн и креатив
                  </span>
                </label>
                <label className="container">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  <span className="text-sm text-gray-700">Маркетинг и SMM</span>
                </label>
                <label className="container">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  <span className="text-sm text-gray-700">
                    Бизнес и предпринимательство
                  </span>
                </label>
                <label className="container">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  <span className="text-sm text-gray-700">
                    Образование и наука
                  </span>
                </label>
                <label className="container">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  <span className="text-sm text-gray-700">
                    Финансы и инвестиции
                  </span>
                </label>
              </div>
            </div>
          )}
        </div>

        <hr className="text-[#F2F1F5] mb-4" />

        {/* Accordion 3: По уровню */}
        <div className="mb-4">
          <button
            onClick={() => toggleAccordion(1)}
            className="w-full flex justify-between items-center p-3 cursor-pointer"
          >
            <span className="font-semibold text-[14px] text-gray-800">
              По уровню
            </span>
            {expandedAccordions.includes(1) ? (
              <MdExpandLess size={20} />
            ) : (
              <MdExpandMore size={20} />
            )}
          </button>
          {expandedAccordions.includes(1) && (
            <div className="mt-2 p-3 bg-white rounded-lg">
              <div className="space-y-2">
                <label className="container">
                  <input type="checkbox" defaultChecked />
                  <span className="checkmark"></span>
                  <span className="text-sm text-gray-700">Все уровни</span>
                </label>
                <label className="container">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  <span className="text-sm text-gray-700">Начинающий</span>
                </label>
                <label className="container">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  <span className="text-sm text-gray-700">Средний</span>
                </label>
                <label className="container">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  <span className="text-sm text-gray-700">Продвинутый</span>
                </label>
              </div>
            </div>
          )}
        </div>

        <hr className="text-[#F2F1F5] mb-4" />

        {/* Accordion 4: По языку */}
        <div className="mb-4">
          <button
            onClick={() => toggleAccordion(2)}
            className="w-full flex justify-between items-center p-3 cursor-pointer"
          >
            <span className="font-semibold text-[14px] text-gray-800">
              По языку
            </span>
            {expandedAccordions.includes(2) ? (
              <MdExpandLess size={20} />
            ) : (
              <MdExpandMore size={20} />
            )}
          </button>
          {expandedAccordions.includes(2) && (
            <div className="mt-2 p-3 bg-white rounded-lg">
              <div className="space-y-2">
                <label className="container">
                  <input type="checkbox" defaultChecked />
                  <span className="checkmark"></span>
                  <span className="text-sm text-gray-700">Все языки</span>
                </label>
                <label className="container">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  <span className="text-sm text-gray-700">Русский</span>
                </label>
                <label className="container">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  <span className="text-sm text-gray-700">Узбекский</span>
                </label>
                <label className="container">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  <span className="text-sm text-gray-700">Английский</span>
                </label>
              </div>
            </div>
          )}
        </div>

        <hr className="text-[#F2F1F5] mb-4" />

        {/* Accordion 5: По статусу ментора */}
        <div className="mb-4">
          <button
            onClick={() => toggleAccordion(3)}
            className="w-full flex justify-between items-center p-3 cursor-pointer"
          >
            <span className="font-semibold text-[14px] text-gray-800">
              По статусу ментора
            </span>
            {expandedAccordions.includes(3) ? (
              <MdExpandLess size={20} />
            ) : (
              <MdExpandMore size={20} />
            )}
          </button>
          {expandedAccordions.includes(3) && (
            <div className="mt-2 p-3 bg-white rounded-lg">
              <div className="space-y-2">
                <label className="container">
                  <input type="checkbox" defaultChecked />
                  <span className="checkmark"></span>
                  <span className="text-sm text-gray-700">Все менторы</span>
                </label>
                <label className="container">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  <span className="text-sm text-gray-700">Онлайн</span>
                </label>
                <label className="container">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  <span className="text-sm text-gray-700">Офлайн</span>
                </label>
                <label className="container">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  <span className="text-sm text-gray-700">Гибридный</span>
                </label>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FiltersSidebar;
