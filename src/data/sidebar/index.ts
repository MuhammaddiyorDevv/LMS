import { MenuItems, SidebarMobile } from "@/types/sidebar";
import {
  Home,
  CloudCheck,
  Package,
  GraduationCap,
  Settings,
} from "lucide-react";

export const menuItems: MenuItems[] = [
  { id: 1, name: "Главная", href: "/", icon: Home },
  { id: 2, name: "Мои курсы", href: "/myCourses", icon: CloudCheck },
  { id: 3, name: "Все курсы", href: "/allCourses", icon: Package },
  { id: 4, name: "Менторы", href: "/mentors", icon: GraduationCap },
  { id: 5, name: "Блоги", href: "/blogs", icon: Settings },
];

export const menuHelpItems: MenuItems[] = [
  {
    id: 6,
    name: "Подписка и тарифы",
    href: "/subscriptionAndRates",
    icon: Package,
  },
  { id: 7, name: "Помощь", href: "/help", icon: Settings },
];

export const sidebarMobile: SidebarMobile[] = [
  { id: 1, icon: Home, name: "Главная", href: "/" },
  { id: 2, icon: CloudCheck, name: "Мои курсы", href: "/myCourses" },
  { id: 3, icon: Package, name: "Все курсы", href: "/allCourses" },
  { id: 4, icon: GraduationCap, name: "Блоги", href: "/blogs" },
  { id: 5, icon: Settings, name: "Меню", href: "/help" },
];
