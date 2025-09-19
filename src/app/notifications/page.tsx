"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import NotificationMobile from "@/components/notification/NotificationMobile";

export default function NotificationsPage() {
  const router = useRouter();

  return (
    <div className="w-full sm:hidden">
      <NotificationMobile />
    </div>
  );
}
