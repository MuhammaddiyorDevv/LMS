"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight, FaPlay, FaStar } from "react-icons/fa";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { SlGraduation } from "react-icons/sl";
import { GoPeople } from "react-icons/go";
import { IoMdTime } from "react-icons/io";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Filler,
} from "chart.js";
import { Doughnut, Line } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Filler
);

// Course Progress Chart Data
const courseProgressData = {
  datasets: [
    {
      data: [26, 74],
      backgroundColor: ["#567D4A", "#5F8B4C"],
      borderWidth: 0,
      cutout: "60%",
    },
  ],
};

const courseProgressConfig = {
  type: "doughnut" as const,
  data: courseProgressData,
  options: {
    aspectRatio: 2,
    circumference: 180,
    rotation: -90,
    plugins: {
      legend: {
        display: false,
      },
    },
  },
};

// Activity Chart Data
const activityData = {
  labels: ["S", "M", "T", "W", "T", "F"],
  datasets: [
    {
      label: "Activity",
      data: [1, 2, 1.5, 3, 2.5, 3.5],
      borderColor: "#567D4A",
      borderWidth: 3,
      fill: true,
      tension: 0.4,
      pointBackgroundColor: "#567D4A",
      pointBorderColor: "#567D4A",
      pointRadius: 6,
      pointHoverRadius: 8,
    },
  ],
};

const activityConfig = {
  type: "line" as const,
  data: activityData,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    backgroundColor: "transparent",
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (context: { dataIndex: number }) => {
            if (context.dataIndex === 4) {
              return "3,5 Часа";
            }
            return "";
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: true,
          color: "#f3f4f6",
        },
        ticks: {
          color: "#6b7280",
        },
      },
      y: {
        beginAtZero: true,
        max: 4,
        ticks: {
          stepSize: 1,
          color: "#6b7280",
          callback: function (value: string | number) {
            if (value === 0) return "";
            return value;
          },
        },
        grid: {
          display: false,
        },
      },
    },
  },
};

// Course data interface
interface Course {
  id: number;
  title: string;
  description: string;
  instructor: {
    name: string;
    avatar: string;
  };
  progress: number;
  image: string;
  gradient: string;
}

// New Course data interface
interface NewCourse {
  id: number;
  title: string;
  description: string;
  rating: number;
  price: string;
  instructor: {
    name: string;
    avatar: string;
  };
  lessons: number;
  participants: number;
  duration: string;
  image: string;
}

// Mentor data interface
interface Mentor {
  id: number;
  name: string;
  title: string;
  avatar: string;
}

// Mentor data
const mentors: Mentor[] = [
  {
    id: 1,
    name: "Абдуллаев Алишер",
    title: "Senior UX Designer",
    avatar: "/Images/MentorOne.svg",
  },
  {
    id: 2,
    name: "Абдуллаев Алишер",
    title: "Senior UX Designer",
    avatar: "/Images/MentorTwo.svg",
  },
  {
    id: 3,
    name: "Абдуллаев Алишер",
    title: "Senior UX Designer",
    avatar: "/Images/MentorThree.svg",
  },
  {
    id: 4,
    name: "Абдуллаев Алишер",
    title: "Senior UX Designer",
    avatar: "/Images/MentorOne.svg",
  },
  {
    id: 5,
    name: "Абдуллаев Алишер",
    title: "Senior UX Designer",
    avatar: "/Images/MentorTwo.svg",
  },
  {
    id: 6,
    name: "Абдуллаев Алишер",
    title: "Senior UX Designer",
    avatar: "/Images/MentorThree.svg",
  },
];

// Course data - 6 courses
const courses: Course[] = [
  {
    id: 1,
    title: "Креативность в мире 3D-дизайна",
    description:
      "3D Master Class — это динамичный и захватывающий курс, который поможет вам освоить основы 3D-моделирования и дизайна.",
    instructor: {
      name: "Lola Yuldasheva",
      avatar: "/Images/Lola.svg",
    },
    progress: 85,
    image: "/Images/mycourses.svg",
    gradient: "from-blue-500 to-purple-600",
  },
  {
    id: 2,
    title: "Креативность в мире 3D-дизайна",
    description:
      "3D Master Class — это динамичный и захватывающий курс, который поможет вам освоить основы 3D-моделирования и дизайна.",
    instructor: {
      name: "Lola Yuldasheva",
      avatar: "/Images/Lola.svg",
    },
    progress: 60,
    image: "/Images/Course.svg",
    gradient: "from-green-500 to-teal-600",
  },
  {
    id: 3,
    title: "Креативность в мире 3D-дизайна",
    description:
      "3D Master Class — это динамичный и захватывающий курс, который поможет вам освоить основы 3D-моделирования и дизайна.",
    instructor: {
      name: "Lola Yuldasheva",
      avatar: "/Images/Lola.svg",
    },
    progress: 30,
    image: "/Images/CourseThree.svg",
    gradient: "from-orange-500 to-red-600",
  },
  {
    id: 4,
    title: "Креативность в мире 3D-дизайна",
    description:
      "3D Master Class — это динамичный и захватывающий курс, который поможет вам освоить основы 3D-моделирования и дизайна.",
    instructor: {
      name: "Lola Yuldasheva",
      avatar: "/Images/Lola.svg",
    },
    progress: 95,
    image: "/Images/mycourses.svg",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    id: 5,
    title: "Креативность в мире 3D-дизайна",
    description:
      "3D Master Class — это динамичный и захватывающий курс, который поможет вам освоить основы 3D-моделирования и дизайна.",
    instructor: {
      name: "Lola Yuldasheva",
      avatar: "/Images/Lola.svg",
    },
    progress: 45,
    image: "/Images/Course.svg",
    gradient: "from-indigo-500 to-blue-600",
  },
  {
    id: 6,
    title: "Креативность в мире 3D-дизайна",
    description:
      "3D Master Class — это динамичный и захватывающий курс, который поможет вам освоить основы 3D-моделирования и дизайна.",
    instructor: {
      name: "Lola Yuldasheva",
      avatar: "/Images/Lola.svg",
    },
    progress: 70,
    image: "/Images/CourseThree.svg",
    gradient: "from-red-500 to-orange-600",
  },
];

// New Course data
const newCourses: NewCourse[] = [
  {
    id: 1,
    title: "Figma Master Class",
    description:
      "Мы подготовили свежие курсы, чтобы вы могли продолжить развивать свои навыки и достигать новых высот. Подберите курс, который соответствует вашим целям и интересами классными темами у нас",
    rating: 4.5,
    price: "1 200 000 UZS",
    instructor: {
      name: "Абдуллаев Алишер",
      avatar: "/Images/Alisher.svg",
    },
    lessons: 23,
    participants: 2949,
    duration: "5h 32m",
    image: "/Images/NewCourseOne.svg",
  },
  {
    id: 2,
    title: "Figma Master Class",
    description:
      "Мы подготовили свежие курсы, чтобы вы могли продолжить развивать свои навыки и достигать новых высот. Подберите курс, который соответствует вашим целям и интересами классными темами у нас",
    rating: 4.5,
    price: "1 200 000 UZS",
    instructor: {
      name: "Абдуллаев Алишер",
      avatar: "/Images/Alisher.svg",
    },
    lessons: 23,
    participants: 2949,
    duration: "5h 32m",
    image: "/Images/NewCourseTwo.svg",
  },
  {
    id: 3,
    title: "Figma Master Class",
    description:
      "Мы подготовили свежие курсы, чтобы вы могли продолжить развивать свои навыки и достигать новых высот. Подберите курс, который соответствует вашим целям и интересами классными темами у нас",
    rating: 4.5,
    price: "1 200 000 UZS",
    instructor: {
      name: "Абдуллаев Алишер",
      avatar: "/Images/Alisher.svg",
    },
    lessons: 23,
    participants: 2949,
    duration: "5h 32m",
    image: "/Images/NewCourseThree.svg",
  },
  {
    id: 4,
    title: "Figma Master Class",
    description:
      "Мы подготовили свежие курсы, чтобы вы могли продолжить развивать свои навыки и достигать новых высот. Подберите курс, который соответствует вашим целям и интересами классными темами у нас",
    rating: 4.5,
    price: "1 200 000 UZS",
    instructor: {
      name: "Абдуллаев Алишер",
      avatar: "/Images/Alisher.svg",
    },
    lessons: 23,
    participants: 2949,
    duration: "5h 32m",
    image: "/Images/NewCourseTwo.svg",
  },
  {
    id: 5,
    title: "Figma Master Class",
    description:
      "Мы подготовили свежие курсы, чтобы вы могли продолжить развивать свои навыки и достигать новых высот. Подберите курс, который соответствует вашим целям и интересами классными темами у нас",
    rating: 4.5,
    price: "1 200 000 UZS",
    instructor: {
      name: "Абдуллаев Алишер",
      avatar: "/Images/Alisher.svg",
    },
    lessons: 23,
    participants: 2949,
    duration: "5h 32m",
    image: "/Images/NewCourseThree.svg",
  },
  {
    id: 6,
    title: "Figma Master Class",
    description:
      "Мы подготовили свежие курсы, чтобы вы могли продолжить развивать свои навыки и достигать новых высот. Подберите курс, который соответствует вашим целям и интересами классными темами у нас",
    rating: 4.5,
    price: "1 200 000 UZS",
    instructor: {
      name: "Абдуллаев Алишер",
      avatar: "/Images/Alisher.svg",
    },
    lessons: 23,
    participants: 2949,
    duration: "5h 32m",
    image: "/Images/NewCourseOne.svg",
  },
];

export default function Home() {
  // Courses carousel state
  const [currentSlide, setCurrentSlide] = useState(0);
  const coursesPerSlide = 3;
  const totalSlides = courses.length - coursesPerSlide + 1;

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const getCurrentCourses = () => {
    return courses.slice(currentSlide, currentSlide + coursesPerSlide);
  };

  // Mentors carousel state
  const [currentMentorSlide, setCurrentMentorSlide] = useState(0);
  const mentorsPerSlide = 3;
  const totalMentorSlides = mentors.length - mentorsPerSlide + 1;

  const nextMentorSlide = () => {
    setCurrentMentorSlide((prev) => Math.min(prev + 1, totalMentorSlides - 1));
  };

  const prevMentorSlide = () => {
    setCurrentMentorSlide((prev) => Math.max(prev - 1, 0));
  };

  const getCurrentMentors = () => {
    return mentors.slice(
      currentMentorSlide,
      currentMentorSlide + mentorsPerSlide
    );
  };

  return (
    <div className="flex flex-col gap-5">
      {/* Dashboard Section */}
      <div className="bg-white rounded-[20px] p-5">
        {/* Header Section */}
        <div className="mb-4">
          <h1 className="text-[24px] font-bold text-black">
            Мы рады вас видеть у нас
          </h1>
          <p className="text-gray-500 text-[16px]">
            Добро пожаловать! Начните обучаться с нами
          </p>
        </div>

        {/* Dashboard Widgets */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Course Progress Widget */}
          <div className="bg-[#124600] rounded-2xl p-4 text-white">
            <h2 className="text-[16px] font-semibold mb-4">Ваш текущий курс</h2>

            <div className="flex items-center justify-center">
              <div
                className="relative"
                style={{ width: "400px", height: "200px" }}
              >
                <Doughnut {...courseProgressConfig} />
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ pointerEvents: "none" }}
                >
                  <div className="absolute left-8 top-8 text-xl text-[#616161] font-bold bg-white py-[13px] px-[6px] rounded-full">
                    26%
                  </div>
                  <div className="text-center">
                    <div className="absolute top-17 left-[170px] bg-white text-[#616161] px-[4px] py-[3.5px] rounded-full text-sm font-medium mb-2">
                      ↑ 2.6%
                    </div>
                    <div className=" absolute bottom-3 left-[135px] text-sm text-white font-semibold">
                      Magna finibus turpis
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Activity Widget */}
          <div className="bg-white rounded-2xl p-4 border border-[#E5E5E5]">
            <div className="flex justify-between items-center mb-[10px]">
              <h2 className="text-[16px] font-semibold text-black">
                Активность
              </h2>
              <div className="relative">
                <select className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option>Сортировка</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div style={{ height: "200px" }}>
              <Line {...activityConfig} />
            </div>
          </div>
        </div>
      </div>
      {/* Courses Section */}
      <div className="bg-white rounded-[20px] p-5 ">
        {/* Header Section */}
        <div className="mb-4 flex justify-between items-center">
          <div>
            <h1 className="text-[24px] font-bold text-black">Ваши курсы</h1>
            <p className="text-gray-500 text-[16px]">
              Продолжайте обучение в удобное время вместе с нами
            </p>
          </div>
          <div className="flex gap-2">
            <button
              aria-label="left"
              className={`p-2 text-[16px] hover:bg-gray-100 rounded-lg transition-colors ${
                currentSlide === 0
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-[#999999]"
              }`}
              onClick={prevSlide}
              disabled={currentSlide === 0}
            >
              <FaChevronLeft className="text-gray-600" />
            </button>
            <button
              aria-label="right"
              className={`p-2 hover:bg-gray-100 rounded-lg transition-colors ${
                currentSlide >= totalSlides - 1
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-[#0B0C0B]"
              }`}
              onClick={nextSlide}
              disabled={currentSlide >= totalSlides - 1}
            >
              <FaChevronRight className="text-gray-600" />
            </button>
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {getCurrentCourses().map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl items-start flex hover:shadow-xl transition-shadow duration-300 overflow-hidden p-4 border border-[#E5E5E5]"
            >
              {/* Course Image */}
              <div className="w-[84px] h-[84px] flex-shrink-0">
                <Image
                  src={course.image}
                  alt="Course thumbnail"
                  width={84}
                  height={84}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Course Content */}
              <div className="flex-1 px-4 h-[84px] flex flex-col justify-between">
                <div>
                  <h2 className="text-sm font-bold text-gray-900 mb-1 line-clamp-1">
                    {course.title}
                  </h2>
                  <p className="text-gray-600 mb-1 line-clamp-1 text-xs">
                    {course.description}
                  </p>
                </div>

                <div>
                  {/* Instructor */}
                  <div className="flex items-center mb-1">
                    <Image
                      src={course.instructor.avatar}
                      alt="Instructor"
                      width={16}
                      height={16}
                      className="w-4 h-4 rounded-full object-cover mr-1"
                    />
                    <div>
                      <p className="font-medium text-[#616161] text-xs">
                        {course.instructor.name}
                      </p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div>
                    <div className="flex justify-end items-center mb-1">
                      <span className="text-xs font-semibold text-[#567D4A]">
                        {course.progress}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1">
                      <div
                        className="bg-[#567D4A] h-1 rounded-full transition-all duration-300"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Mentors Section */}
      <div className="bg-white rounded-[20px] p-5 ">
        {/* Header Section */}
        <div className="mb-4 flex justify-between items-center">
          <div>
            <h1 className="text-[24px] font-bold text-black">
              Ваши наставники - эксперты в деле
            </h1>
            <p className="text-gray-500 text-[16px]">
              Практики, которые помогут вам разобраться в сложных темах,
              поделятся ценными инсайтами
            </p>
          </div>
          <div className="flex gap-2">
            <button
              aria-label="left"
              className={`p-2 text-[16px] hover:bg-gray-100 rounded-lg transition-colors ${
                currentMentorSlide === 0
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-[#999999]"
              }`}
              onClick={prevMentorSlide}
              disabled={currentMentorSlide === 0}
            >
              <FaChevronLeft className="text-gray-600" />
            </button>
            <button
              aria-label="right"
              className={`p-2 hover:bg-gray-100 rounded-lg transition-colors ${
                currentMentorSlide >= totalMentorSlides - 1
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-[#0B0C0B]"
              }`}
              onClick={nextMentorSlide}
              disabled={currentMentorSlide >= totalMentorSlides - 1}
            >
              <FaChevronRight className="text-gray-600" />
            </button>
          </div>
        </div>
        {/* Mentors Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {getCurrentMentors().map((mentor) => (
            <div
              key={mentor.id}
              className="bg-white rounded-2xl border border-[#E5E5E5] flex items-center gap-4 hover:shadow-lg transition-shadow duration-300"
              style={{ padding: "16px 34px 16px 16px" }}
            >
              {/* Profile Picture */}
              <div className="w-16 h-16 flex-shrink-0">
                <Image
                  src={mentor.avatar}
                  alt="Mentor profile"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Mentor Info */}
              <div className="flex-1">
                <h3 className="text-lg font-bold text-black mb-1">
                  {mentor.name}
                </h3>
                <p className="text-gray-500 text-sm">{mentor.title}</p>
              </div>

              {/* Play Button */}
              <button
                aria-label="Play"
                className="p-3 rounded-full transition-colors"
              >
                <FaPlay className="text-[#567D4A] text-[18px]" />
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* New Course Section */}
      <div className="bg-white rounded-[20px] p-5 ">
        <div className="mb-4 flex justify-between items-center">
          <div>
            <h1 className="text-[24px] font-bold text-black">
              Новые курсы для вас
            </h1>
            <p className="text-gray-500 text-[16px]">
              Откройте для себя новые возможности обучения
            </p>
          </div>
          <div className="flex gap-2">
            <Link
              href="/allCourses"
              className="text-white bg-[#567D4A] px-5 py-[14px] rounded-[99px] font-semibold transition-colors"
            >
              Смотреть еще{" "}
              <AiOutlinePlusCircle className="inline-block ml-1 text-[24px]" />
            </Link>
          </div>
        </div>

        {/* New Course Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {newCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl border border-[#E5E5E5] hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              {/* Course Image */}
              <div className="relative h-48 w-full">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Course Content */}
              <div className="p-6">
                {/* Course Title and Rating */}
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-[6px]">
                    <h3 className="text-lg font-bold text-black line-clamp-2">
                      {course.title}
                    </h3>
                    <div className="flex items-center gap-1 ml-2">
                      <FaStar className="text-yellow-400 text-sm" />
                      <span className="text-sm font-semibold text-gray-700">
                        {course.rating}
                      </span>
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-[#006ADC]">
                    {course.price}
                  </p>
                </div>

                {/* Course Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {course.description}
                </p>

                {/* Instructor */}
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src={course.instructor.avatar}
                    alt={course.instructor.name}
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-700">
                      {course.instructor.name}
                    </p>
                  </div>
                </div>

                {/* Price and Enroll Button */}
                <div className="flex justify-between items-center">
                  <div></div>
                </div>

                {/* Course Stats */}
                <div className="flex justify-between items-center mt-3">
                  <div className="flex items-center gap-2">
                    <SlGraduation className="text-[#616161] text-sm" />
                    <span className="text-xs text-gray-600">
                      {course.lessons} уроков
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GoPeople className="text-[#616161] text-sm" />
                    <span className="text-xs text-gray-600">
                      {course.participants.toLocaleString()} Участников
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <IoMdTime className="text-[#616161] text-sm" />
                    <span className="text-xs text-gray-600">
                      {course.duration}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
