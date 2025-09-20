import { ActionButton } from "../../../types/mentors/detail";
import { FaRegHeart } from "react-icons/fa";
import { IoChatbubbleOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";

// Action buttons for mentor profile
export const mentorProfileActions: ActionButton[] = [
  {
    id: "consultation",
    label: "Записаться на консультацию",
    variant: "primary",
    onClick: () => {
      // Handle consultation booking
      console.log("Booking consultation...");
    },
  },
  {
    id: "favorite",
    label: "Добавить в избранное",
    variant: "secondary",
    icon: FaRegHeart,
    onClick: () => {
      // Handle adding to favorites
      console.log("Adding to favorites...");
    },
  },
];

// Action buttons for mentor contact section
export const mentorContactActions: ActionButton[] = [
  {
    id: "message",
    label: "Написать сообщение",
    variant: "primary",
    icon: IoChatbubbleOutline,
    onClick: () => {
      // Handle messaging
      console.log("Opening message dialog...");
    },
  },
  {
    id: "call",
    label: "Записаться на звонок",
    variant: "outline",
    icon: IoCallOutline,
    onClick: () => {
      // Handle call booking
      console.log("Booking call...");
    },
  },
];

// Function to get profile actions
export const getMentorProfileActions = (): ActionButton[] => {
  return mentorProfileActions;
};

// Function to get contact actions
export const getMentorContactActions = (): ActionButton[] => {
  return mentorContactActions;
};
