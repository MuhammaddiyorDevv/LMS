"use client";

import React from "react";
import { useParams } from "next/navigation";
import { mentorsData } from "../../../data/mentors";
import MentorProfile from "../../../components/mentors/detail/MentorProfile";
import MentorDetails from "../../../components/mentors/detail/MentorDetails";
import MentorNotFound from "../../../components/mentors/detail/MentorNotFound";

const MentorDetailPage = () => {
  const params = useParams();
  const mentorId = parseInt(params.id as string);
  
  const mentor = mentorsData.find(m => m.id === mentorId);

  if (!mentor) {
    return <MentorNotFound />;
  }

  return (
    <div className="bg-white rounded-[20px] p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <MentorProfile mentor={mentor} />
        <MentorDetails mentor={mentor} />
      </div>
    </div>
  );
};

export default MentorDetailPage;
