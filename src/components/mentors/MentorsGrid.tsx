"use client";

import React from "react";
import { Mentor } from "../../types/mentors";
import MentorCard from "./MentorCard";

interface MentorsGridProps {
  mentors: Mentor[];
}

const MentorsGrid: React.FC<MentorsGridProps> = ({ mentors }) => {
  if (mentors.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-500 text-lg mb-2">Менторы не найдены</div>
        <div className="text-gray-400 text-sm">
          Попробуйте изменить параметры поиска
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
      {mentors.map((mentor) => (
        <MentorCard key={mentor.id} mentor={mentor} />
      ))}
    </div>
  );
};

export default MentorsGrid;
