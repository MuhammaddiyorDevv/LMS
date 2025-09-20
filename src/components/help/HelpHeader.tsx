"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";

const HelpHeader = () => {
  const router = useRouter();

  return (
    <header className="bg-[#F6F6F6] border-b border-b-[#E5E5E5] mt-[12px] sticky top-0 z-50">
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#F6F6F6] sm:static">
        <div className="flex items-center justify-between h-[56px] gap-3 px-[24px] sm:px-0">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-3 hover:bg-gray-50 rounded-lg p-2 transition-colors"
          >
            <ChevronLeft />
          </button>

          <h1 className="text-lg font-semibold text-[#0B0C0B] flex-1 text-center">
            Помощь
          </h1>

          <div className="w-[44px]"></div>
        </div>
      </div>
    </header>
  );
};

export default HelpHeader;
