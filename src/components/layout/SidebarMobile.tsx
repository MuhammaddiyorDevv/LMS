"use client";

import { sidebarMobile } from "@/data/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function SidebarMobile() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-[#E5E5E5] flex justify-evenly py-2 sm:hidden">
      {sidebarMobile.slice(0, 5).map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.id}
            href={item.href}
            className="flex flex-col items-center text-gray-700 group cursor-pointer"
          >
            <div
              className={`p-2.5 rounded-xl transition-all duration-300 ease-in-out 
                         group-hover:bg-[#567D4A] group-hover:text-white 
                         group-hover:-translate-y-1 transform
                         ${isActive ? "bg-[#567D4A] text-white -translate-y-1" : ""}`}
            >
              <item.icon className="w-6 h-6" />
            </div>
            <p
              className={`text-[10px] mt-[3px] transition-colors duration-300 
                          group-hover:text-[#567D4A] 
                          ${isActive ? "text-[#567D4A]" : ""}`}
            >
              {item.name}
            </p>
          </Link>
        );
      })}
    </div>
  );
}
