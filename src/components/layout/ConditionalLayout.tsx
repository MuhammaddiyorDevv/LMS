"use client";

import { usePathname } from "next/navigation";
import Sidebar from "@/components/layout/Sidebar";
import NavbarDesktop from "@/components/layout/NavbarDesktop";
import NavbarMobile from "@/components/layout/NavbarMobile";
import SidebarMobile from "@/components/layout/SidebarMobile";
import HelpHeader from "@/components/help/HelpHeader";

interface ConditionalLayoutProps {
  children: React.ReactNode;
}

export default function ConditionalLayout({
  children,
}: ConditionalLayoutProps) {
  const pathname = usePathname();
  const isHelpPage = pathname === "/help";
  const isChatPage = pathname === "/chat";

  if (isChatPage) {
    return <>{children}</>;
  }

  return (
    <div className="bg-[#F6F6F6] flex">
      <div className="fixed top-0 left-0 h-screen w-64 bg-white border-[#E5E5E5] hidden sm:block">
        <Sidebar />
      </div>

      <div className="flex flex-col flex-1 px-[24px] sm:ml-64 ml-0 pt-[56px] sm:pt-0">
        {!isHelpPage && (
          <div className="sm:hidden">
            <SidebarMobile />
          </div>
        )}

        <div className="hidden sm:block">
          <NavbarDesktop />
        </div>

        {!isHelpPage && (
          <div className="sm:hidden">
            <NavbarMobile />
          </div>
        )}

        {isHelpPage && (
          <div className="sm:hidden">
            <HelpHeader />
          </div>
        )}

        <main className="flex-1 mt-[20px] pb-20 sm:pb-0">
          {children}
        </main>
      </div>
    </div>
  );
}
