"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mentor } from "../../types/mentors";

interface MentorCardProps {
  mentor: Mentor;
}

const MentorCard: React.FC<MentorCardProps> = ({ mentor }) => {
  const ExperienceIcon = mentor.icons?.experience;
  const CoursesIcon = mentor.icons?.courses;
  const StudentsIcon = mentor.icons?.students;
  const HeartIcon = mentor.icons?.heart;

  return (
    <div className="">
      <div className="flex gap-4 border-[1px] border-[#E5E5E5] rounded-[16px] p-3">
        <div className="flex-shrink-0">
          <Image
            src={mentor.avatar}
            alt={mentor.name}
            width={210}
            height={176}
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col justify-between h-[176px]">
          <div>
            <div className="text-lg font-semibold">{mentor.name}</div>
            <div className="text-sm text-gray-500">{mentor.title}</div>
            <div className="text-sm text-gray-600 mt-2 line-clamp-2">
              {mentor.description}
            </div>
          </div>

          <div className="flex gap-2 text-sm text-gray-500 mt-2 flex-wrap">
            <div className="flex gap-2 bg-[#F6F6F6] py-[1] px-[10px] rounded-[76px]">
              {ExperienceIcon && <ExperienceIcon className="mt-1" />}
              Experience: {mentor.experience} year
            </div>
            <div className="flex gap-2 bg-[#F6F6F6] py-[1] px-[10px] rounded-[76px]">
              {CoursesIcon && <CoursesIcon className="mt-1" />}
              {mentor.coursesCount} уроков
            </div>
            <div className="flex gap-2 bg-[#F6F6F6] py-[1] px-[10px] rounded-[76px]">
              {StudentsIcon && <StudentsIcon className="mt-1" />}
              {mentor.studentsCount} Участников
            </div>
          </div>

          <div className="flex gap-3 mt-3">
            <Link
              href={`/mentors/${mentor.id}`}
              className="bg-[#567D4A] text-white py-2 px-4 rounded-[99px] hover:bg-[#4a6b3f] transition-colors text-sm"
            >
              Узнать больше
            </Link>
            <button
              className="flex gap-2 py-2 px-4 rounded-[99px] border-[1px] border-[#E5E5E5] hover:bg-gray-50 transition-colors text-sm"
            >
              {HeartIcon && <HeartIcon className="mt-0.5" />}
              Смотреть позже
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorCard;
