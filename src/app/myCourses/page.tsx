"use client";

import React, { useState } from "react";
import { myCoursesData } from "../../data/myCourses";
import { TabOption } from "../../types/myCourses";
import PageHeader from "../../components/myCourses/PageHeader";
import MyCoursesGrid from "../../components/myCourses/MyCoursesGrid";

const MyCoursesPage = () => {
  const [activeTab, setActiveTab] = useState("my-courses");

  const tabs: TabOption[] = [
    {
      id: "my-courses",
      label: "Мои курсы",
      isActive: activeTab === "my-courses",
    },
    {
      id: "archive",
      label: "Архив",
      isActive: activeTab === "archive",
    },
  ];

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  // Filter courses based on active tab
  const filteredCourses = activeTab === "my-courses" ? myCoursesData : [];

  return (
    <div className="min-h-screen">
      <div className="mx-auto">
        <PageHeader
          title="Мои курсы"
          tabs={tabs}
          onTabChange={handleTabChange}
        />
        <MyCoursesGrid courses={filteredCourses} />
      </div>
    </div>
  );
};

export default MyCoursesPage;
