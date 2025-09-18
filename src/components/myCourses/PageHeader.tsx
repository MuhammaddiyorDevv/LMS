"use client";

import React from "react";
import { TabNavigationProps } from "../../types/myCourses";
import TabNavigation from "./TabNavigation";

interface PageHeaderProps {
  title: string;
  tabs: TabNavigationProps["tabs"];
  onTabChange: (tabId: string) => void;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  tabs,
  onTabChange,
}) => {
  return (
    <div className="mb-5">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">{title}</h1>
      <TabNavigation tabs={tabs} onTabChange={onTabChange} />
    </div>
  );
};

export default PageHeader;
