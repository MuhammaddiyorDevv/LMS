"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MentorProfileProps } from "../../../types/mentors/detail";
import { IoArrowBack } from "react-icons/io5";
import { IoStar } from "react-icons/io5";
import { IoBagRemoveSharp } from "react-icons/io5";
import { IoBook } from "react-icons/io5";
import { BiUser } from "react-icons/bi";
import { IoChatbubbleOutline } from "react-icons/io5";

const MentorProfile: React.FC<MentorProfileProps> = ({ mentor }) => {
  const skills = [
    "Ux ui designer",
    "Product designing",
    "Fintech career",
    "Mobile app principles",
    "+12",
  ];

  return (
    <div className="lg:col-span-1">
      <div className="sticky top-6">
        <Link
          href="/mentors"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-[#567D4A] mb-6 transition-colors"
        >
          <IoArrowBack className="text-lg" />
          Назад к менторам
        </Link>
<<<<<<< HEAD
=======

>>>>>>> 1673e60639b76b69f353990ff5a8076ebb19ca00
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <div className="text-center mb-6">
            <div className="relative inline-block">
              <Image
                src={mentor.avatar}
                alt={mentor.name}
                width={120}
                height={120}
                className="rounded-full object-cover mx-auto mb-3"
              />
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-gray-100 px-3 py-1 rounded-full flex items-center gap-1">
                <IoStar className="text-yellow-400 text-sm" />
                <span className="text-sm font-semibold text-gray-700">
                  {mentor.rating}
                </span>
              </div>
            </div>
            <h1 className="text-lg font-bold text-gray-900 mb-1 mt-2">
              {mentor.name}
            </h1>
            <p className="text-sm text-gray-600">{mentor.title}</p>
          </div>
<<<<<<< HEAD
=======

>>>>>>> 1673e60639b76b69f353990ff5a8076ebb19ca00
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-gray-900">
                  {mentor.experience} year
                </div>
                <div className="text-xs text-gray-600">Experience</div>
              </div>
              <IoBagRemoveSharp className="text-[#0B0C0B] text-lg" />
            </div>
            <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-gray-900">
                  {mentor.coursesCount}
                </div>
                <div className="text-xs text-gray-600">Уроков</div>
              </div>
              <IoBook className="text-[#0B0C0B] text-lg" />
            </div>
            <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-gray-900">
                  {mentor.studentsCount}
                </div>
                <div className="text-xs text-gray-600">Участников</div>
              </div>
              <BiUser className="text-[#0B0C0B] text-lg" />
            </div>
            <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-gray-900">32</div>
                <div className="text-xs text-gray-600">Комментарии</div>
              </div>
              <IoChatbubbleOutline className="text-[#0B0C0B] text-lg" />
            </div>
          </div>
<<<<<<< HEAD
=======

>>>>>>> 1673e60639b76b69f353990ff5a8076ebb19ca00
          <div className="mb-6">
            <h3 className="text-sm font-bold text-gray-900 mb-3">
              Лучшие навыки
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 rounded-full text-xs ${
                    skill.startsWith("+")
                      ? "bg-gray-200 text-gray-600"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorProfile;
