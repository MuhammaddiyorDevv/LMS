"use client";

import React from "react";

interface CourseDetailHeaderProps {
  title: string;
  badge?: string;
}

const CourseDetailHeader: React.FC<CourseDetailHeaderProps> = ({ 
  title, 
  badge = "TOP RATED" 
}) => {
  return (
    <div className="bg-white p-4 rounded-[16px] mb-8">
      <div className="flex flex-col gap-2 mb-6">
        <span className="bg-[#D5EECD] text-[#567D4A] py-1 px-[6px] rounded-[4px] text-xs font-medium w-fit">
          {badge}
        </span>
        <h1 className="text-[24px] md:text-[26px] font-bold text-gray-800 leading-tight">
          {title}
        </h1>
      </div>
      <hr className="py-[16px]" />
    </div>
  );
};

export default CourseDetailHeader;
