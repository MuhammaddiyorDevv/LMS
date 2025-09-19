"use client";

import React, { useState } from "react";
import { mentorsData } from "../../data/mentors";
import FiltersSidebar from "../../components/shared/FiltersSidebar";
import SearchBar from "../../components/shared/SearchBar";
import MentorsGrid from "../../components/mentors/MentorsGrid";

const MentorsPage = () => {
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000000 });
  const [searchTerm, setSearchTerm] = useState("");

  const handlePriceChange = (min: number, max: number) => {
    setPriceRange({ min, max });
  };

  // Function to extract numeric value from price string
  const extractPrice = (priceString: string): number => {
    const numericValue = priceString.replace(/[^\d]/g, "");
    return parseInt(numericValue) || 0;
  };

  // Filter mentors based on search term and price range
  const filteredMentors = mentorsData.filter((mentor) => {
    const mentorPrice = extractPrice(mentor.hourlyRate);
    const matchesSearch =
      mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mentor.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mentor.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mentor.specialization.some((spec) =>
        spec.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    const matchesPrice =
      mentorPrice >= priceRange.min && mentorPrice <= priceRange.max;

    return matchesSearch && matchesPrice;
  });

  return (
    <div className="flex gap-5 bg-white rounded-[20px] p-5">
      <FiltersSidebar
        priceRange={priceRange}
        onPriceChange={handlePriceChange}
        type="mentors"
      />
      <div className="w-[75%] p-1">
        <h1 className="font-semibold text-[24px]">Все менторы</h1>
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          placeholder="Ищите менторов"
        />
        <MentorsGrid mentors={filteredMentors} />
      </div>
    </div>
  );
};

export default MentorsPage;
