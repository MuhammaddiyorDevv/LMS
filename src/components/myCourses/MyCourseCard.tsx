"use client";

import React from "react";
import Image from "next/image";
import { MyCourse } from "../../types/myCourses";

interface MyCourseCardProps {
  course: MyCourse;
}

const MyCourseCard: React.FC<MyCourseCardProps> = ({ course }) => {
  return (
    <div className="bg-white rounded-2xl items-start flex hover:shadow-xl transition-shadow duration-300 overflow-hidden p-4 border border-[#E5E5E5]">
      <div className="w-[84px] h-[84px] flex-shrink-0">
        <Image
          src={course.image}
          alt="Course thumbnail"
          width={84}
          height={84}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

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
  );
};

export default MyCourseCard;
