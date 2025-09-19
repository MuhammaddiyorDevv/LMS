"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { SlGraduation } from "react-icons/sl";
import { GoPeople } from "react-icons/go";
import { IoMdTime } from "react-icons/io";
import { newCourses } from "../../data/home";

const NewCoursesSection = () => {
  return (
    <div className="bg-white rounded-[20px] p-5">
      <div className="mb-4 flex justify-between items-center">
        <div>
          <h1 className="text-[24px] font-bold text-black">
            Новые курсы для вас
          </h1>
          <p className="text-gray-500 text-[16px]">
            Откройте для себя новые возможности обучения
          </p>
        </div>
        <div className="flex gap-2">
          <Link
            href="/allCourses"
            className="text-white bg-[#567D4A] px-5 py-[14px] rounded-[99px] font-semibold transition-colors"
          >
            Смотреть еще{" "}
            <AiOutlinePlusCircle className="inline-block ml-1 text-[24px]" />
          </Link>
        </div>
      </div>

      {/* New Course Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {newCourses.map((course, index) => (
          <div
            key={course.id}
            className="bg-white rounded-2xl border border-[#E5E5E5] hover:shadow-xl transition-all duration-500 ease-in-out overflow-hidden transform hover:scale-105"
            style={{
              animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
            }}
          >
            {/* Course Image */}
            <div className="relative h-48 w-full">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Course Content */}
            <div className="p-6">
              {/* Course Title and Rating */}
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-[6px]">
                  <h3 className="text-lg font-bold text-black line-clamp-2">
                    {course.title}
                  </h3>
                  <div className="flex items-center gap-1 ml-2">
                    <FaStar className="text-yellow-400 text-sm" />
                    <span className="text-sm font-semibold text-gray-700">
                      {course.rating}
                    </span>
                  </div>
                </div>
                <p className="font-semibold text-[#006ADC] whitespace-nowrap text-[clamp(12px,2.2vw,20px)]">
                  {course.price}
                </p>
              </div>

              {/* Course Description */}
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {course.description}
              </p>

              {/* Instructor */}
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src={course.instructor.avatar}
                  alt={course.instructor.name}
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-medium text-gray-700">
                    {course.instructor.name}
                  </p>
                </div>
              </div>

              {/* Price and Enroll Button */}
              <div className="flex justify-between items-center">
                <div></div>
              </div>

              {/* Course Stats */}
              <div className="flex justify-between items-center mt-3">
                <div className="flex items-center gap-2">
                  <SlGraduation className="text-[#616161] text-sm" />
                  <span className="text-xs text-gray-600">
                    {course.lessons} уроков
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <GoPeople className="text-[#616161] text-sm" />
                  <span className="text-xs text-gray-600">
                    {course.participants.toLocaleString()} Участников
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <IoMdTime className="text-[#616161] text-sm" />
                  <span className="text-xs text-gray-600">
                    {course.duration}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewCoursesSection;
