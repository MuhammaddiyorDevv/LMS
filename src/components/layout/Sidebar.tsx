"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  CloudCheck,
  Package,
  GraduationCap,
  Settings,
  ChevronRight,
} from "lucide-react";

const menuItems = [
  { name: "Главная", href: "/", icon: Home },
  { name: "Мои курсы", href: "/myCourses", icon: CloudCheck },
  { name: "Все курсы", href: "/allCourses", icon: Package },
  { name: "Менторы ", href: "/mentors", icon: GraduationCap },
  { name: "Блоги", href: "/blogs", icon: Settings },
];

const menuItems2 = [
  { name: "Подписка и тарифы", href: "/subscriptionAndRates", icon: Package },
  { name: "Помощь", href: "/help", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white shadow-md flex flex-col px-3 fixed h-screen">
      {/* Logo */}
      <div className="flex items-center py-[20px]">
        <img src="/Images/Logo.svg" alt="Logo" />
      </div>
      <hr className="text-[#E5E5E5]" />

      {/* Menu */}
      <nav className="flex-1 py-[20px] flex flex-col justify-between">
        <div>
          <ul className="space-y-2 pb-[20px]">
            {menuItems.map(({ name, href, icon: Icon }) => {
              const active = pathname === href || (href === "/allCourses" && pathname.startsWith("/course/"));
              return (
                <li key={name}>
                  <Link
                    href={href}
                    className={`flex items-center gap-3 p-3 rounded-lg transition 
                    ${
                      active
                        ? "bg-[#567D4A] text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <Icon size={20} />
                    <span>{name}</span>
                    <ChevronRight size={16} className="ml-auto" />
                  </Link>
                </li>
              );
            })}
          </ul>

          <hr className="border-[#E5E5E5]" />

          <ul className="space-y-2 py-[20px]">
            {menuItems2.map(({ name, href, icon: Icon }) => {
              const active = pathname === href;
              return (
                <li key={name}>
                  <Link
                    href={href}
                    className={`flex items-center gap-3 p-3 rounded-lg transition 
                    ${
                      active
                        ? "bg-[#567D4A] text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <Icon size={20} />
                    <span className="text-[15px]">{name}</span>
                    <ChevronRight size={16} className="ml-auto" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Bottom */}
        <div className="rounded-lg flex flex-col gap-[20px]">
          <div className="bg-[#F6F6F6] flex flex-col items-center text-center py-[16px] px-[14px] rounded-t-lg">
            <img
              className="w-[64px] h-[56px]"
              src="/Images/Diamond.svg"
              alt=""
            />
            <h3 className="mt-2 font-semibold">Получите Pro-версию</h3>
            <p className="text-[12px] text-[#616161] mt-1">
              Обновитесь до Pro и получите доступ ко всем курсам, бонусам и
              сертификатам!
            </p>
            <a
              className="mt-3 bg-[#567D4A] text-white px-[72.5px] py-[11px] rounded-[99px]"
              href=""
            >
              Перейти
            </a>
          </div>

          <div className="flex py-[10px] px-[8px] gap-[12px]">
            <img src="/Images/Avatar.svg" alt="" />
            <div>
              <h3 className="font-bold">Creative Bro</h3>
              <p className="text-[#616161]">Student</p>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
}
