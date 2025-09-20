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
    setCurrentMentorSlide((prev) => {
      const next = prev + 1;
      return next >= totalMentorSlides ? 0 : next;
    });
  };

  const prevMentorSlide = () => {
    setCurrentMentorSlide((prev) => {
      const prevSlide = prev - 1;
      return prevSlide < 0 ? totalMentorSlides - 1 : prevSlide;
    });
  };

  // Auto carousel effect for mentors
  useEffect(() => {
    if (!isMentorsPaused) {
      mentorsIntervalRef.current = setInterval(() => {
        setCurrentMentorSlide((prev) => {
          const next = prev + 1;
          return next >= totalMentorSlides ? 0 : next;
        });
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
          <h1 className="text-xl sm:text-[24px] font-bold text-black flex">
            Ваши наставники
            <span className="hidden sm:flex">- эксперты в деле</span>
          </h1>
          <p className="text-gray-500 text-[14px] sm:text-[16px]">
            Практики, которые помогут вам разобраться в сложных темах, поделятся
            ценными инсайтами
          </p>
        </div>
        <div className="hidden sm:flex gap-2">
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

      {/* Mentors Cards Slider */}
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setIsMentorsPaused(true)}
        onMouseLeave={() => setIsMentorsPaused(false)}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${
              currentMentorSlide * (100 / mentorsPerSlide)
            }%)`,
          }}
        >
          {Array.from({ length: totalMentorSlides }).map((_, slideIndex) => (
            <div
              key={slideIndex}
              className="w-full flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              style={{ gap: "16px" }}
            >
              {mentors
                .slice(slideIndex, slideIndex + mentorsPerSlide)
                .map((mentor, index) => (
                  <div
                    key={`${mentor.id}-${slideIndex}`}
                    className="bg-white p-3 w-full sm:py-4 sm:pl-4 sm:pr-[34px] rounded-2xl border border-[#E5E5E5] flex flex-col items-start sm:flex-row sm:items-center gap-4  transition-all duration-500 ease-in-out transform cursor-pointer"
                    style={{
                      animation: `slideInFromLeft 0.6s ease-out ${
                        index * 0.1
                      }s both`,
                    }}
                  >
                    {/* Profile Picture */}
                    <div className="w-[42px] h-[42px] sm:w-16 sm:h-16 flex-shrink-0">
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
                      <h3 className="text-black mb-1 font-semibold text-[16px]">
                        {mentor.name}
                      </h3>
                      <p className="text-gray-500 text-[12px]">
                        {mentor.title}
                      </p>
                    </div>

                    {/* Play Button */}
                    <button
                      aria-label="Play"
                      className="hidden sm:flex p-3 rounded-full transition-colors"
                    >
                      <FaPlay className="text-[#567D4A] text-[18px]" />
                    </button>

                    {/* Mobile Button */}
                    <button className="rounded-[99px] bg-[#567D4A] text-white py-[11px] px-[52px] text-[12px] flex sm:hidden">
                      Continue
                    </button>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MentorsSection;
