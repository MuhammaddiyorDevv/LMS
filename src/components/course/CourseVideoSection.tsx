"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MdPlayArrow, MdClose } from "react-icons/md";

interface CourseVideoSectionProps {
  image: string;
  title: string;
  videoUrl?: string;
}

const CourseVideoSection: React.FC<CourseVideoSectionProps> = ({ 
  image, 
  title,
  videoUrl = "https://www.youtube.com/embed/ODpB9-MCa5s?si=Yyjb4GQQGZYXyIjl"
}) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="bg-white rounded-[16px] shadow-sm overflow-hidden">
      <div className="relative h-[380px] md:h-[380px]">
        {showVideo ? (
          <div className="relative w-full h-full">
            <iframe
              className="w-full h-full rounded-[16px]"
              src={videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 transition-all"
            >
              <MdClose className="text-xl" />
            </button>
          </div>
        ) : (
          <>
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <button 
                onClick={() => setShowVideo(true)}
                className="bg-[#567D4A] bg-opacity-20 rounded-full p-4 hover:bg-opacity-30 transition-all cursor-pointer"
              >
                <MdPlayArrow className="text-white text-6xl" />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CourseVideoSection;
