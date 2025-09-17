"use client";

import { Heart, Bell, Search } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const isCourseDetailPage = pathname.startsWith("/course/");

  return (
    <header className="flex items-center py-[12px] border-b border-b-[#E5E5E5] justify-between bg-[#F6F6F6]">
      {/* Search bar or Back button */}
      <div className="relative w-[420px]">
        {isCourseDetailPage ? (
          <button
            onClick={() => router.back()}
            className="w-[194px] flex items-center gap-3 rounded-[99px] border border-[#E5E5E5] bg-white text-sm 
                       py-[17px] px-[16px] hover:bg-gray-50 transition-colors"
          >
            <Image src="/Images/back.svg" alt="Back" width={20} height={20} className="" />
            <span className="text-[#0B0C0B] font-medium">Перейти назад</span>
          </button>
        ) : (
          <>
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
          </>
        )}
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
