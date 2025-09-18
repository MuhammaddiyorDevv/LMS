import type { Metadata } from "next";
import "../styles/globals.css";
import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";

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
      <body className="h-screen bg-[#F6F6F6] flex">
        {/* Sidebar chapda joyida turadi */}
        <div className="fixed top-0 left-0 h-screen w-64 bg-white border-[#E5E5E5] ">
          <Sidebar />
        </div>

        {/* Asosiy qism */}
        <div className="flex flex-col flex-1 px-[24px] ml-64">
          {/* Navbar */}
          <Navbar />

          {/* Page content */}
          <main className="flex-1 overflow-y-auto mt-[20px]">{children}</main>
        </div>
      </body>
    </html>
  );
}
