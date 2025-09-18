"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight, FaPlay } from "react-icons/fa";
import { mentors } from "../../data/home";

const MentorsSection = () => {
  // Mentors carousel state
  const [currentMentorSlide, setCurrentMentorSlide] = useState(0);
  const [isMentorsPaused, setIsMentorsPaused] = useState(false);
  const mentorsPerSlide = 3;
  const totalMentorSlides = mentors.length - mentorsPerSlide + 1;
  const mentorsIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextMentorSlide = () => {
    setCurrentMentorSlide((prev) => (prev + 1) % totalMentorSlides);
  };

  const prevMentorSlide = () => {
    setCurrentMentorSlide((prev) => (prev - 1 + totalMentorSlides) % totalMentorSlides);
  };

  const getCurrentMentors = () => {
    return mentors.slice(
      currentMentorSlide,
      currentMentorSlide + mentorsPerSlide,
    );
  };

  // Auto carousel effect for mentors
  useEffect(() => {
    if (!isMentorsPaused) {
      mentorsIntervalRef.current = setInterval(() => {
        nextMentorSlide();
      }, 5000); // Change slide every 5 seconds
    }

    return () => {
      if (mentorsIntervalRef.current) {
        clearInterval(mentorsIntervalRef.current);
      }
    };
  }, [isMentorsPaused, totalMentorSlides]);

  return (
    <div className="bg-white rounded-[20px] p-5">
      {/* Header Section */}
      <div className="mb-4 flex justify-between items-center">
        <div>
          <h1 className="text-[24px] font-bold text-black">
            Ваши наставники - эксперты в деле
          </h1>
          <p className="text-gray-500 text-[16px]">
            Практики, которые помогут вам разобраться в сложных темах,
            поделятся ценными инсайтами
          </p>
        </div>
        <div className="flex gap-2">
          <button
            aria-label="left"
            className="p-2 text-[16px] hover:bg-gray-100 rounded-lg transition-colors text-[#999999]"
            onClick={prevMentorSlide}
          >
            <FaChevronLeft className="text-gray-600" />
          </button>
          <button
            aria-label="right"
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-[#0B0C0B]"
            onClick={nextMentorSlide}
          >
            <FaChevronRight className="text-gray-600" />
          </button>
        </div>
      </div>

      {/* Mentors Cards Grid */}
      <div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 carousel-container"
        onMouseEnter={() => setIsMentorsPaused(true)}
        onMouseLeave={() => setIsMentorsPaused(false)}
      >
        {getCurrentMentors().map((mentor, index) => (
          <div
            key={mentor.id}
            className="bg-white rounded-2xl border border-[#E5E5E5] flex items-center gap-4 hover:shadow-lg transition-all duration-500 ease-in-out transform hover:scale-105 carousel-item"
            style={{ 
              padding: "16px 34px 16px 16px",
              animation: `slideInFromLeft 0.6s ease-out ${index * 0.1}s both`
            }}
          >
            {/* Profile Picture */}
            <div className="w-16 h-16 flex-shrink-0">
              <Image
                src={mentor.avatar}
                alt="Mentor profile"
                width={64}
                height={64}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Mentor Info */}
            <div className="flex-1">
              <h3 className="text-lg font-bold text-black mb-1">
                {mentor.name}
              </h3>
              <p className="text-gray-500 text-sm">{mentor.title}</p>
            </div>

            {/* Play Button */}
            <button
              aria-label="Play"
              className="p-3 rounded-full transition-colors"
            >
              <FaPlay className="text-[#567D4A] text-[18px]" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MentorsSection;
