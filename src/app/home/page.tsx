"use client";

import React from "react";
import DashboardSection from "../../components/home/DashboardSection";
import MyCoursesSection from "../../components/home/MyCoursesSection";
import MentorsSection from "../../components/home/MentorsSection";
import NewCoursesSection from "../../components/home/NewCoursesSection";

export default function Home() {

  return (
    <div className="flex flex-col gap-5">
      <DashboardSection />
      <MyCoursesSection />
      <MentorsSection />
      <NewCoursesSection />
    </div>
  );
}
