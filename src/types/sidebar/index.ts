import { ElementType } from "react";

export interface MenuItems {
  id: number;
  name: string;
  href: string;
  icon: ElementType;
}

export interface SidebarMobile {
  id: number;
  icon: ElementType;
  name: string;
  href: string;
}
