"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { courses } from "../../data/home";

const MyCoursesSection = () => {
  // Courses carousel state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isCoursesPaused, setIsCoursesPaused] = useState(false);
  const coursesPerSlide = 3;
  const totalSlides = courses.length - coursesPerSlide + 1;
  const coursesIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentCourses = () => {
    return courses.slice(currentSlide, currentSlide + coursesPerSlide);
  };

  // Auto carousel effect for courses
  useEffect(() => {
    if (!isCoursesPaused) {
      coursesIntervalRef.current = setInterval(() => {
        nextSlide();
      }, 4000); // Change slide every 4 seconds
    }

    return () => {
      if (coursesIntervalRef.current) {
        clearInterval(coursesIntervalRef.current);
      }
    };
  }, [isCoursesPaused, totalSlides]);

  return (
    <div className="bg-white rounded-[20px] p-5">
      {/* Header Section */}
      <div className="mb-4 flex justify-between items-center">
        <div>
          <h1 className="text-[24px] font-bold text-black">Ваши курсы</h1>
          <p className="text-gray-500 text-[16px]">
            Продолжайте обучение в удобное время вместе с нами
          </p>
        </div>
        <div className="flex gap-2">
          <button
            aria-label="left"
            className="p-2 text-[16px] hover:bg-gray-100 rounded-lg transition-colors text-[#999999]"
            onClick={prevSlide}
          >
            <FaChevronLeft className="text-gray-600" />
          </button>
          <button
            aria-label="right"
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-[#0B0C0B]"
            onClick={nextSlide}
          >
            <FaChevronRight className="text-gray-600" />
          </button>
        </div>
      </div>

      {/* Course Cards Grid */}
      <div
        className="grid grid-cols-1 lg:grid-cols-3 gap-6 carousel-container"
        onMouseEnter={() => setIsCoursesPaused(true)}
        onMouseLeave={() => setIsCoursesPaused(false)}
      >
        {getCurrentCourses().map((course, index) => (
          <div
            key={course.id}
            className="bg-white rounded-2xl items-start flex hover:shadow-xl transition-all duration-500 ease-in-out overflow-hidden p-4 border border-[#E5E5E5] transform hover:scale-105 carousel-item"
            style={{
              animation: `slideInFromRight 0.6s ease-out ${index * 0.1}s both`,
            }}
          >
            {/* Course Image */}
            <div className="w-[84px] h-[84px] flex-shrink-0">
              <Image
                src={course.image}
                alt="Course thumbnail"
                width={84}
                height={84}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Course Content */}
            <div className="flex-1 px-4 h-[84px] flex flex-col justify-between">
              <div>
                <h2 className="text-sm font-bold text-gray-900 mb-1 line-clamp-1">
                  {course.title}
                </h2>
                <p className="text-gray-600 mb-1 line-clamp-1 text-xs">
                  {course.description}
                </p>
              </div>

              <div>
                {/* Instructor */}
                <div className="flex items-center mb-1">
                  <Image
                    src={course.instructor.avatar}
                    alt="Instructor"
                    width={16}
                    height={16}
                    className="w-4 h-4 rounded-full object-cover mr-1"
                  />
                  <div>
                    <p className="font-medium text-[#616161] text-xs">
                      {course.instructor.name}
                    </p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div>
                  <div className="flex justify-end items-center mb-1">
                    <span className="text-xs font-semibold text-[#567D4A]">
                      {course.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1">
                    <div
                      className="bg-[#567D4A] h-1 rounded-full transition-all duration-300"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCoursesSection;
