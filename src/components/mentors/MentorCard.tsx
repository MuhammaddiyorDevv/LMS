"use client";

import React from "react";
import Image from "next/image";
import { Mentor } from "../../types/mentors";

interface MentorCardProps {
  mentor: Mentor;
}

const MentorCard: React.FC<MentorCardProps> = ({ mentor }) => {
  return (
    <div className="">
      {/* MentorCard component - content will be added later */}
    </div>
  );
};

export default MentorCard;
