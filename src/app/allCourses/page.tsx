"use client";

import React, { useCallback, useState } from "react";
import { allCoursesData } from "../../data/allCourses";
import FiltersSidebar from "../../components/shared/FiltersSidebar";
import SearchBar from "../../components/shared/SearchBar";
import CoursesGrid from "../../components/allCourses/CoursesGrid";
const AllCoursesPage = () => {
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000000 });
  const [searchTerm, setSearchTerm] = useState("");

  const handlePriceChange = useCallback((min: number, max: number) => {
    setPriceRange((prev) => {
      if (prev.min === min && prev.max === max) return prev;
      return { min, max };
    });
  }, []);

  const extractPrice = (priceString: string): number => {
    const numericValue = priceString.replace(/[^\d]/g, "");
    return parseInt(numericValue) || 0;
  };

  const filteredCourses = allCoursesData.filter((course) => {
    const coursePrice = extractPrice(course.price);
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice =
      coursePrice >= priceRange.min && coursePrice <= priceRange.max;

    return matchesSearch && matchesPrice;
  });

  return (
    <div className="flex gap-5 bg-white rounded-[20px] p-5">
      <FiltersSidebar
        priceRange={priceRange}
        onPriceChange={handlePriceChange}
        type="courses"
      />
      <div className="w-[75%] p-1">
        <h1 className="font-semibold text-[24px]">Все курсы</h1>
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          placeholder="Ищите курсы"
        />
        <CoursesGrid courses={filteredCourses} />
      </div>
    </div>
  );
};

export default AllCoursesPage;
