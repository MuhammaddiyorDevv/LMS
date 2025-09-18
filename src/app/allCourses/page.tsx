"use client";

import React, { useState } from "react";
import { allCoursesData } from "../../data/allCourses";
import FiltersSidebar from "../../components/allCourses/FiltersSidebar";
import SearchBar from "../../components/allCourses/SearchBar";
import CoursesGrid from "../../components/allCourses/CoursesGrid";
const AllCoursesPage = () => {
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000000 });
  const [searchTerm, setSearchTerm] = useState("");

  const handlePriceChange = (min: number, max: number) => {
    setPriceRange({ min, max });
  };

  // Function to extract numeric value from price string
  const extractPrice = (priceString: string): number => {
    const numericValue = priceString.replace(/[^\d]/g, "");
    return parseInt(numericValue) || 0;
  };

  // Filter courses based on search term and price range
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
                />
      <div className="w-[75%] p-1">
        <h1 className="font-semibold text-[24px]">Все курсы</h1>
        <SearchBar 
          searchTerm={searchTerm} 
          onSearchChange={setSearchTerm} 
        />
        <CoursesGrid courses={filteredCourses} />
      </div>
    </div>
  );
};

export default AllCoursesPage;
