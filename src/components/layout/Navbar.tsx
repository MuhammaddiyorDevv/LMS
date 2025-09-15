"use client";

import { Heart, Bell, Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="flex items-center py-[12px] border-b border-b-[#E5E5E5] justify-between bg-[#F6F6F6]">
      {/* Search bar */}
      <div className="relative w-[420px]">
        <Search
          size={20}
          className="absolute left-[16px] top-1/2 -translate-y-1/2 text-[#0B0C0B]"
        />
        <input
          type="text"
          placeholder="Ищите что угодно"
          className="w-full rounded-xl border border-[#E5E5E5] bg-white text-sm 
                     py-[17px] pr-[16px] pl-[45px] focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Right side icons */}
      <div className="flex items-center gap-3">
        <button
          aria-label="favorites"
          className="p-4 rounded-[16px] bg-white hover:cursor-pointer"
        >
          <Heart size={20} />
        </button>
        <button
          aria-label="notifications"
          className="p-4 rounded-[16px] bg-white hover:cursor-pointer"
        >
          <Bell size={20} />
        </button>
      </div>
    </header>
  );
}
