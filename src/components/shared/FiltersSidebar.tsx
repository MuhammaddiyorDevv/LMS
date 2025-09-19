"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MdOutlineReplay, MdExpandMore, MdExpandLess } from "react-icons/md";
import PriceRangeSlider from "./PriceRangeSlider";
import "../../styles/custom-checkbox.css";

interface FiltersSidebarProps {
  priceRange: { min: number; max: number };
  onPriceChange: (min: number, max: number) => void;
  type: "courses" | "mentors";
}

const FiltersSidebar: React.FC<FiltersSidebarProps> = ({ onPriceChange, type }) => {
  const [expandedAccordions, setExpandedAccordions] = useState<number[]>([]);

  const toggleAccordion = (index: number) => {
    setExpandedAccordions((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  // Different configurations for courses vs mentors
  const getConfig = () => {
    if (type === "courses") {
      return {
        priceRange: { min: 0, max: 10000000, step: 100000, priceGap: 500000 },
        accordions: [
          {
            id: 0,
            title: "Ценовой диапазон",
            content: "priceRange"
          },
          {
            id: 4,
            title: "По специализации",
            content: "specialization"
          },
          {
            id: 1,
            title: "По уровню",
            content: "level"
          },
          {
            id: 2,
            title: "По языку",
            content: "language"
          },
          {
            id: 3,
            title: "По статусу ментора",
            content: "mentorStatus"
          }
        ]
      };
    } else {
      return {
        priceRange: { min: 0, max: 1000000, step: 10000, priceGap: 50000 },
        accordions: [
          {
            id: 0,
            title: "Ценовой диапазон",
            content: "priceRange"
          },
          {
            id: 1,
            title: "По специализации",
            content: "specialization"
          },
          {
            id: 2,
            title: "По опыту",
            content: "experience"
          },
          {
            id: 3,
            title: "По языку",
            content: "language"
          },
          {
            id: 4,
            title: "По статусу",
            content: "status"
          }
        ]
      };
    }
  };

  const config = getConfig();

  const renderSpecializationContent = () => (
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
  );

  const renderLevelContent = () => (
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
  );

  const renderExperienceContent = () => (
    <div className="space-y-2">
      <label className="container">
        <input type="checkbox" defaultChecked />
        <span className="checkmark"></span>
        <span className="text-sm text-gray-700">Все уровни</span>
      </label>
      <label className="container">
        <input type="checkbox" />
        <span className="checkmark"></span>
        <span className="text-sm text-gray-700">1-3 года</span>
      </label>
      <label className="container">
        <input type="checkbox" />
        <span className="checkmark"></span>
        <span className="text-sm text-gray-700">3-5 лет</span>
      </label>
      <label className="container">
        <input type="checkbox" />
        <span className="checkmark"></span>
        <span className="text-sm text-gray-700">5+ лет</span>
      </label>
    </div>
  );

  const renderLanguageContent = () => (
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
  );

  const renderMentorStatusContent = () => (
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
  );

  const renderStatusContent = () => (
    <div className="space-y-2">
      <label className="container">
        <input type="checkbox" defaultChecked />
        <span className="checkmark"></span>
        <span className="text-sm text-gray-700">Все статусы</span>
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
  );

  const renderAccordionContent = (contentType: string) => {
    switch (contentType) {
      case "priceRange":
        return (
          <div className="mt-2 bg-white rounded-lg">
            <PriceRangeSlider
              min={config.priceRange.min}
              max={config.priceRange.max}
              step={config.priceRange.step}
              priceGap={config.priceRange.priceGap}
              onPriceChange={onPriceChange}
            />
          </div>
        );
      case "specialization":
        return (
          <div className="mt-2 p-3 bg-white rounded-lg">
            {renderSpecializationContent()}
          </div>
        );
      case "level":
        return (
          <div className="mt-2 p-3 bg-white rounded-lg">
            {renderLevelContent()}
          </div>
        );
      case "experience":
        return (
          <div className="mt-2 p-3 bg-white rounded-lg">
            {renderExperienceContent()}
          </div>
        );
      case "language":
        return (
          <div className="mt-2 p-3 bg-white rounded-lg">
            {renderLanguageContent()}
          </div>
        );
      case "mentorStatus":
        return (
          <div className="mt-2 p-3 bg-white rounded-lg">
            {renderMentorStatusContent()}
          </div>
        );
      case "status":
        return (
          <div className="mt-2 p-3 bg-white rounded-lg">
            {renderStatusContent()}
          </div>
        );
      default:
        return null;
    }
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
          <h5 className="font-semibold text-[14px]">Только премиум</h5>
          <Image src="/Images/Switch.svg" alt="Switch" width={24} height={24} />
        </div>
        <hr className="text-[#F2F1F5] mb-4" />

        {/* Dynamic Accordions */}
        {config.accordions.map((accordion, index) => (
          <div key={accordion.id}>
            <div className="mb-4">
              <button
                onClick={() => toggleAccordion(accordion.id)}
                className="w-full flex justify-between items-center p-3 cursor-pointer"
              >
                <span className="font-semibold text-[14px] text-gray-800">
                  {accordion.title}
                </span>
                {expandedAccordions.includes(accordion.id) ? (
                  <MdExpandLess size={20} />
                ) : (
                  <MdExpandMore size={20} />
                )}
              </button>
              {expandedAccordions.includes(accordion.id) && (
                <div>
                  {renderAccordionContent(accordion.content)}
                </div>
              )}
            </div>
            {index < config.accordions.length - 1 && (
              <hr className="text-[#F2F1F5] mb-4" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FiltersSidebar;
