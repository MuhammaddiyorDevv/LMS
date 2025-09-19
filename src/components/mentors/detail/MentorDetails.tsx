"use client";

import React, { useState } from "react";
import { MentorDetailsProps } from "../../../types/mentors/detail";

const MentorDetails: React.FC<MentorDetailsProps> = ({ mentor }) => {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    { id: "about", label: "О менторе" },
    { id: "courses", label: "Курсы" },
    { id: "reviews", label: "Отзывы" }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "about":
        return (
          <div className="space-y-8">
            {/* About Section */}
            <div>
              <h2 className="text-xl font-semibold mb-4">О менторе</h2>
              <p className="text-gray-700 leading-relaxed">{mentor.description}</p>
            </div>

            {/* Specializations */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Специализации</h2>
              <div className="flex flex-wrap gap-2">
                {mentor.specialization.map((spec, index) => (
                  <span
                    key={index}
                    className="bg-[#F6F6F6] text-gray-700 px-4 py-2 rounded-full text-sm"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Языки</h2>
              <div className="flex flex-wrap gap-2">
                {mentor.languages.map((language, index) => (
                  <span
                    key={index}
                    className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );

      case "courses":
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4">Курсы ментора</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Sample courses */}
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Основы UX/UI дизайна</h3>
                <p className="text-sm text-gray-600 mb-3">Изучите основы пользовательского опыта и интерфейсного дизайна</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">12 уроков</span>
                  <span className="text-sm font-semibold text-[#567D4A]">Бесплатно</span>
                </div>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Продвинутый дизайн</h3>
                <p className="text-sm text-gray-600 mb-3">Углубленное изучение современных методов дизайна</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">8 уроков</span>
                  <span className="text-sm font-semibold text-[#567D4A]">500,000 сум</span>
                </div>
              </div>
            </div>
          </div>
        );

      case "reviews":
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4">Отзывы студентов</h2>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 text-sm font-semibold">А</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Анна Петрова</div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-sm">★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">Отличный ментор! Очень понятно объясняет сложные темы.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 text-sm font-semibold">М</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Михаил Иванов</div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-sm">★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">Профессиональный подход к обучению. Рекомендую всем!</p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="lg:col-span-2">
      {/* Tab Navigation */}
      <div className="mb-6 w-full">
        <nav className="flex space-x-2 w-full">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                activeTab === tab.id
                  ? 'bg-white text-gray-900 shadow-sm border border-gray-200'
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="min-h-[400px]">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default MentorDetails;
