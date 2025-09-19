"use client";

import React from "react";
import { AllCoursesPageCourse } from "../../types/allCourses";
import CourseCard from "./CourseCard";

interface CoursesGridProps {
  courses: AllCoursesPageCourse[];
}

const CoursesGrid: React.FC<CoursesGridProps> = ({ courses }) => {
  return (
    <div className="gap-6 mt-6 grid grid-cols-1">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CoursesGrid;
