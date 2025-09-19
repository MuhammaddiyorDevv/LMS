"use client";

import React from "react";
import { MdSearch } from "react-icons/md";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  onSearchChange,
  placeholder = "Поиск",
}) => {
  return (
    <div className="mt-4 mb-6">
      <div className="relative">
        <MdSearch
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#0B0C0B]"
          size={20}
        />
        <input
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-[#E5E5E5] rounded-[12px] outline-none transition-all"
        />
      </div>
    </div>
  );
};

export default SearchBar;
