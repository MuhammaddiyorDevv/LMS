import type { Metadata } from "next";
import "../styles/globals.css";
import ConditionalLayout from "@/components/layout/ConditionalLayout";

export const metadata: Metadata = {
  title: "CRM System",
  description: "CRM built with Next.js, Tailwind, TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
<<<<<<< HEAD
      <body>
        <ConditionalLayout>{children}</ConditionalLayout>
=======
      <body className="h-screen bg-[#F6F6F6] flex">
        {/* Sidebar chapda joyida turadi */}
        <div className="fixed top-0 left-0 h-screen w-64 bg-white border-[#E5E5E5] hidden sm:block">
          <Sidebar />
        </div>

        {/* Desktop Navbar - Fixed */}
        <div className="hidden sm:block fixed top-0 left-64 right-0 z-50 px-[24px] ">
          <NavbarDesktop />
        </div>

        {/* Asosiy qism */}
        <div className="flex flex-col flex-1 px-[24px] sm:ml-64 ml-0 pt-[56px] sm:pt-[56px]">
          {/* Mobile Sidebar */}
          <div className="sm:hidden">
            <SidebarMobile />
          </div>

          {/* Mobile Navbar */}
          <div className="sm:hidden">
            <NavbarMobile />
          </div>

          {/* Page content */}
          <main className="flex-1 mt-[46px] pb-20 sm:pb-0">{children}</main>
        </div>
>>>>>>> 559e1a6 (slider fixed bug home page)
      </body>
    </html>
  );
}
