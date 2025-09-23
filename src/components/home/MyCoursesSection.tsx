"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { courses } from "../../data/home";

const MyCoursesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isCoursesPaused, setIsCoursesPaused] = useState(false);
  const coursesPerSlide = 3;
  const totalSlides = courses.length - coursesPerSlide + 1;
  const coursesIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentCourses = () => {
    return courses.slice(currentSlide, currentSlide + coursesPerSlide);
  };

  useEffect(() => {
    if (!isCoursesPaused) {
      coursesIntervalRef.current = setInterval(() => {
        nextSlide();
<<<<<<< HEAD
      }, 4000);
=======
      }, 4000); 
>>>>>>> 1673e60639b76b69f353990ff5a8076ebb19ca00
    }

    return () => {
      if (coursesIntervalRef.current) {
        clearInterval(coursesIntervalRef.current);
      }
    };
  }, [isCoursesPaused, totalSlides]);

  return (
    <div className="bg-white rounded-[20px] p-3 sm:p-5 max-w-full overflow-hidden w-full">
      <div className="mb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
        <div>
          <h1 className="text-[20px] sm:text-[24px] font-bold text-black">
            Ваши курсы
          </h1>
          <p className="text-gray-500 text-[14px] font-normal sm:text-[16px]">
            Продолжайте обучение в удобное время вместе с нами
          </p>
        </div>
        <div className="flex gap-2 w-full sm:w-auto justify-end">
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

      <div
        className="relative overflow-hidden w-full"
        onMouseEnter={() => setIsCoursesPaused(true)}
        onMouseLeave={() => setIsCoursesPaused(false)}
      >
        <div
          ref={sliderRef}
          className="slider-track flex gap-2 sm:gap-4 transition-transform duration-500 ease-in-out w-full"
          style={{
            transform: `translateX(-${
              currentSlide * (100 / coursesPerSlide)
            }%)`,
            width: `${(courses.length / coursesPerSlide) * 100}%`,
          }}
        >
          {courses.map((course, index) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl items-start flex flex-col sm:flex-row gap-2 sm:gap-3.5 transition-all duration-500 ease-in-out p-2 sm:p-4 border border-[#E5E5E5] transform cursor-pointer carousel-item flex-shrink-0 w-full"
              style={{
                width: `${97 / courses.length}%`,
                minWidth: `${97 / coursesPerSlide}%`,
                animation: `slideInFromRight 0.6s ease-out ${
                  index * 0.1
                }s both`,
              }}
            >
              <div className="h-32 sm:h-20 sm:w-[84px] sm:h-[84px] flex-shrink-0 w-full sm:w-auto">
                <Image
                  src={course.image}
                  alt="Course thumbnail"
                  width={84}
                  height={84}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
<<<<<<< HEAD
=======

>>>>>>> 1673e60639b76b69f353990ff5a8076ebb19ca00
              <div className="flex-1 h-auto sm:h-[84px] sm:h-auto flex flex-col justify-between w-full">
                <div>
                  <h2 className="text-sm font-semibold text-gray-900 mb-1">
                    {course.title}
                  </h2>
                  <p className="text-gray-600 mb-1 line-clamp-2 sm:line-clamp-1 text-xs">
                    {course.description}
                  </p>
                </div>
                <div>
                  <div className="flex items-center mt-3 mb-3.5">
                    <Image
                      src={course.instructor.avatar}
                      alt="Instructor"
                      width={20}
                      height={20}
                      className="w-4 h-4 rounded-full object-cover mr-1"
                    />
                    <div>
                      <p className="sm:font-normal font-medium text-[#616161] text-[12px] sm:text-[10px]">
                        {course.instructor.name}
                      </p>
                    </div>
                  </div>
<<<<<<< HEAD
=======

>>>>>>> 1673e60639b76b69f353990ff5a8076ebb19ca00
                  <div>
                    <div className="flex justify-end items-center ">
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
    </div>
  );
};

export default MyCoursesSection;
