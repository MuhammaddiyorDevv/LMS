"use client";

import React from "react";
import { MdCheckCircle } from "react-icons/md";

interface CourseDescriptionProps {
  fullDescription: string;
  keyPoints: string[];
}

const CourseDescription: React.FC<CourseDescriptionProps> = ({ 
  fullDescription, 
  keyPoints 
}) => {
  return (
    <div className="bg-white rounded-[16px] shadow-sm p-6 mb-8">
      <div className="w-full flex flex-col gap-[8px]">
        <p className="text-[#616161] leading-relaxed text-justify whitespace-pre-wrap break-words text-base">
          {fullDescription}
        </p>
      </div>
      
      <div className="mt-4">
        <h1 className="font-semibold text-[#0B0C0B] text-[24px]">
          Ключевой момент
        </h1>
        <ul className="space-y-2 text-[#616161] items-center font-medium">
          {keyPoints.map((point, index) => (
            <li key={index} className="mt-[10px]">
              <MdCheckCircle className="inline text-[#567D4A] text-[30px] mr-2" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseDescription;
