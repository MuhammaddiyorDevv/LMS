"use client";

import React from "react";
import Image from "next/image";
import { CourseAuthor } from "../../types/course";

interface CourseAuthorsProps {
  authors: CourseAuthor[];
  aboutText?: string;
}

const CourseAuthors: React.FC<CourseAuthorsProps> = ({ 
  authors, 
  aboutText 
}) => {
  return (
    <div className="bg-white rounded-[16px] shadow-sm p-6 mb-8">
      <h1 className="text-[24px] font-bold text-[#0B0C0B] mb-6">
        Об авторах
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {authors.map((author) => (
          <div 
            key={author.id}
            className="flex items-start gap-4 border border-[#E5E5E5] p-4 rounded-[12px] hover:bg-gray-50 transition-colors"
          >
            <Image
              src={author.avatar}
              alt={author.name}
              width={80}
              height={80}
              className="w-20 h-20 rounded-full object-cover flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-[#0B0C0B] mb-2">
                {author.name}
              </h3>
              <p className="text-[#616161] mb-2">{author.role}</p>
              {author.bio && (
                <p className="text-[#616161] text-sm leading-relaxed">
                  {author.bio}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {aboutText && (
        <div className="mt-6">
          <p className="text-[#616161] leading-relaxed text-justify">
            {aboutText}
          </p>
        </div>
      )}
    </div>
  );
};

export default CourseAuthors;
