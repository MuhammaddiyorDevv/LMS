import { ElementType } from "react";

export interface Cards {
  id: number;
  title: string;
  desc: string;
  icon: ElementType;
  bg: string;
}
export interface Contact {
  id: number;
  icon: ElementType;
  bg: string;
  label: string;
  value: string;
  link: string;
}
export interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: string;
}
