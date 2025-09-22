"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { SlGraduation } from "react-icons/sl";
import { GoPeople } from "react-icons/go";
import { IoMdTime } from "react-icons/io";
import { AllCoursesPageCourse } from "../../types/allCourses";
import Beginning from "../uroven/Beginning";
import Intermediate from "../uroven/Intermediate";
import Master from "../uroven/Master";
interface CourseCardProps {
  course: AllCoursesPageCourse;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const renderLevelComponent = (level: string) => {
    switch (level) {
      case "Beginning":
        return <Beginning />;
      case "Intermediate":
        return <Intermediate />;
      case "Master":
        return <Master />;
      default:
        return <Beginning />;
    }
  };
  return (
    <Link
      href={`/course/${course.id}`}
      className="bg-white rounded-2xl border border-[#E5E5E5] hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer"
    >
      {/* Course Image */}
      <div className="relative h-48 w-full">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover"
        />
        
        {/* Level Overlay */}
        <div className="absolute bg-white top-[14px] left-[14px] flex items-center gap-[6px] p-[6px] rounded-[4px]">
          <div className="text-black py-1 rounded-full text-xs font-medium">
            {course.level === "Beginning"
              ? "Начинающий"
              : course.level === "Intermediate"
              ? "Средний уровень"
              : "Мастер"}
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-lg">
            {renderLevelComponent(course.level)}
          </div>
        </div>
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
          <p className="text-2xl font-bold text-[#006ADC]">{course.price}</p>
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
            <span className="text-xs text-gray-600">{course.duration}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
