import { ActionButton } from "../../../types/mentors/detail";
import { FaRegHeart } from "react-icons/fa";
import { IoChatbubbleOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";

export const mentorProfileActions: ActionButton[] = [
  {
    id: "consultation",
    label: "Записаться на консультацию",
    variant: "primary",
    onClick: () => {
      console.log("Booking consultation...");
    },
  },
  {
    id: "favorite",
    label: "Добавить в избранное",
    variant: "secondary",
    icon: FaRegHeart,
    onClick: () => {
      console.log("Adding to favorites...");
    },
  },
];

export const mentorContactActions: ActionButton[] = [
  {
    id: "message",
    label: "Написать сообщение",
    variant: "primary",
    icon: IoChatbubbleOutline,
    onClick: () => {
      console.log("Opening message dialog...");
    },
  },
  {
    id: "call",
    label: "Записаться на звонок",
    variant: "outline",
    icon: IoCallOutline,
    onClick: () => {
      console.log("Booking call...");
    },
  },
];

export const getMentorProfileActions = (): ActionButton[] => {
  return mentorProfileActions;
};

export const getMentorContactActions = (): ActionButton[] => {
  return mentorContactActions;
};
