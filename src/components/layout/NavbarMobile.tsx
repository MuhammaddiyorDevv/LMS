"use client";

import { Heart, Bell, Search } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

export default function NavbarMobile() {
  const pathname = usePathname();
  const router = useRouter();

  if (pathname.startsWith("/notifications")) {
    return null;
  }

  const isCourseDetailPage = pathname.startsWith("/course/");

  return (
    <header className="bg-[#F6F6F6] border-b border-b-[#E5E5E5] mt-[12px] sticky top-0 z-50">
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#F6F6F6] sm:static">
        <div className="flex mb-3 items-center justify-between h-[56px] gap-3 px-[24px] sm:px-0">
          <img src="/Images/slogo.svg" alt="logo" className="flex sm:hidden" />

          <div className="flex items-center gap-4 sm:gap-3 ml-auto">
            <Heart className="flex sm:hidden" />
            <button
              aria-label="notifications"
              onClick={() => router.push("/notifications")}
              className="hover:cursor-pointer relative flex sm:hidden"
            >
              <Bell size={24} />
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center py-[12px] sm:hidden">
        <div className="relative w-[420px]">
          {isCourseDetailPage ? (
            <button
              onClick={() => router.back()}
              className="w-[194px] flex items-center gap-3 rounded-[99px] border border-[#E5E5E5] bg-white text-sm 
                         py-[17px] px-[16px] hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <Image
                src="/Images/back.svg"
                alt="Back"
                width={20}
                height={20}
                className=""
              />
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
                className="w-full text-[#616161] rounded-xl border border-[#E5E5E5] bg-white text-sm 
                           py-[17px] pr-[16px] pl-[45px] focus:outline-none"
              />
            </>
          )}
        </div>
      </div>
    </header>
  );
}
