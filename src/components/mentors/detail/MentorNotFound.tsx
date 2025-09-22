"use client";

import React from "react";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";

const MentorNotFound: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-96">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-600">
          Ментор не найден
        </h2>
        <p className="text-gray-500 mt-2">
          Возможно, этот ментор был удален или не существует.
        </p>
        <Link
          href="/mentors"
          className="mt-4 inline-flex items-center gap-2 text-[#567D4A] hover:underline"
        >
          <IoArrowBack className="text-sm" />
          Вернуться к списку менторов
        </Link>
      </div>
    </div>
  );
};

export default MentorNotFound;
