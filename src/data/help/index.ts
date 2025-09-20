import { FaChessBoard } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import {
  MdOutlineShield,
  MdOutlineVideoLibrary,
  MdOutlineMailOutline,
  MdOutlinePhoneInTalk,
} from "react-icons/md";
import { BsCameraVideo } from "react-icons/bs";
import { TbLayoutDistributeHorizontal } from "react-icons/tb";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { Cards, Contact } from "@/types/help";

export const cards: Cards[] = [
  {
    id: 1,
    title: "Getting start",
    desc: "3D Master Class — это динамичный и захватывающий",
    icon: FaChessBoard,
    bg: "bg-[#006ADC]",
  },
  {
    id: 2,
    title: "Account settings",
    desc: "3D Master Class — это динамичный и захватывающий",
    icon: IoSettingsOutline,
    bg: "bg-[#D9A055]",
  },
  {
    id: 3,
    title: "Safety & security",
    desc: "3D Master Class — это динамичный и захватывающий",
    icon: MdOutlineShield,
    bg: "bg-black",
  },
  {
    id: 4,
    title: "Вебинары",
    desc: "3D Master Class — это динамичный и захватывающий",
    icon: BsCameraVideo,
    bg: "bg-[#19A7B0]",
  },
  {
    id: 5,
    title: "Курсы",
    desc: "3D Master Class — это динамичный и захватывающий",
    icon: MdOutlineVideoLibrary,
    bg: "bg-[#1536E3]",
  },
  {
    id: 6,
    title: "Interface",
    desc: "3D Master Class — это динамичный и захватывающий",
    icon: TbLayoutDistributeHorizontal,
    bg: "bg-[#567D4A]",
  },
  {
    id: 7,
    title: "F.A.Q",
    desc: "3D Master Class — это динамичный и захватывающий",
    icon: IoIosHelpCircleOutline,
    bg: "bg-[#D54424]",
  },
  {
    id: 8,
    title: "Billing",
    desc: "3D Master Class — это динамичный и захватывающий",
    icon: BsCameraVideo,
    bg: "bg-[#DB5962]",
  },
];

export const contacts: Contact[] = [
  {
    id: 1,
    icon: MdOutlinePhoneInTalk,
    bg: "bg-[#567D4A] p-1.5",
    label: "Техподдержка",
    value: "+998 00 777 77 77 или 1278",
    link: "tel:+998007777777",
  },
  {
    id: 2,
    icon: MdOutlineMailOutline,
    bg: "bg-[#567D4A] p-1.5",
    label: "Электронная почта",
    value: "support@intil.uz",
    link: "mailto:support@intil.uz",
  },
  {
    id: 3,
    icon: MdOutlinePhoneInTalk,
    bg: "bg-[#006ADC] p-1.5",
    label: "По рекламе",
    value: "+998 00 999 99 99",
    link: "tel:+998009999999",
  },
  {
    id: 4,
    icon: MdOutlinePhoneInTalk,
    bg: "bg-[#D9A055] p-1.5",
    label: "Для сотрудничества",
    value: "+998 00 999 99 99",
    link: "tel:+998009999999",
  },
];
