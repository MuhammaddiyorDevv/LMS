"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MdOutlineReplay,
  MdSearch,
  MdExpandMore,
  MdExpandLess,
} from "react-icons/md";
import { SlGraduation } from "react-icons/sl";
import { GoPeople } from "react-icons/go";
import { IoMdTime } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import "../../styles/custom-checkbox.css";
import PriceRangeSlider from "../../components/PriceRangeSlider";

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
    image: "/Images/NewCourseThree.svg",
  },
  {
    id: 2,
    title: "React Development Course",
    description:
      "Изучите современную разработку на React с нуля до профессионального уровня. Практические проекты и реальные кейсы.",
    rating: 4.8,
    price: "2 500 000 UZS",
    instructor: {
      name: "Иванов Петр",
      avatar: "/Images/Alisher.svg",
    },
    lessons: 35,
    participants: 1847,
    duration: "8h 15m",
    image: "/Images/NewCourseTwo.svg",
  },
  {
    id: 3,
    title: "Python Programming",
    description:
      "Освойте Python с нуля и станьте востребованным программистом. Изучите основы и продвинутые концепции языка.",
    rating: 4.7,
    price: "800 000 UZS",
    instructor: {
      name: "Смирнова Анна",
      avatar: "/Images/Alisher.svg",
    },
    lessons: 28,
    participants: 3256,
    duration: "6h 45m",
    image: "/Images/NewCourseTwo.svg",
  },
  {
    id: 4,
    title: "UI/UX Design Fundamentals",
    description:
      "Изучите принципы дизайна пользовательского интерфейса и создавайте интуитивные и красивые приложения.",
    rating: 4.9,
    price: "3 200 000 UZS",
    instructor: {
      name: "Козлов Дмитрий",
      avatar: "/Images/Alisher.svg",
    },
    lessons: 42,
    participants: 1523,
    duration: "10h 20m",
    image: "/Images/NewCourseThree.svg",
  },
  {
    id: 5,
    title: "JavaScript Advanced",
    description:
      "Продвинутые техники JavaScript, ES6+, асинхронное программирование и современные фреймворки.",
    rating: 4.6,
    price: "1 800 000 UZS",
    instructor: {
      name: "Волков Алексей",
      avatar: "/Images/Alisher.svg",
    },
    lessons: 31,
    participants: 2187,
    duration: "7h 30m",
    image: "/Images/NewCourseThree.svg",
  },
  {
    id: 6,
    title: "Data Science with Python",
    description:
      "Анализ данных, машинное обучение и визуализация с использованием Python и популярных библиотек.",
    rating: 4.8,
    price: "4 500 000 UZS",
    instructor: {
      name: "Новикова Елена",
      avatar: "/Images/Alisher.svg",
    },
    lessons: 48,
    participants: 987,
    duration: "12h 15m",
    image: "/Images/NewCourseTwo.svg",
  },
];
const AllCoursesPage = () => {
  const [expandedAccordions, setExpandedAccordions] = useState<number[]>([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000000 });
  const [searchTerm, setSearchTerm] = useState("");

  const toggleAccordion = (index: number) => {
    setExpandedAccordions((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handlePriceChange = (min: number, max: number) => {
    setPriceRange({ min, max });
  };

  // Function to extract numeric value from price string
  const extractPrice = (priceString: string): number => {
    const numericValue = priceString.replace(/[^\d]/g, '');
    return parseInt(numericValue) || 0;
  };

  // Filter courses based on search term and price range
  const filteredCourses = newCourses.filter((course) => {
    const coursePrice = extractPrice(course.price);
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = coursePrice >= priceRange.min && coursePrice <= priceRange.max;
    
    return matchesSearch && matchesPrice;
  });

  return (
    <div className="flex gap-5 bg-white rounded-[20px] p-5">
        <div className="w-[25%] h-auto border-[1px] rounded-[16px] border-[#E5E5E5]">
        {/* Filters Header */}
        <div className="flex justify-between items-center p-4 border-b-[1px] border-b-[#F2F1F5]">
          <h1 className="font-semibold">Филтры</h1>
          <MdOutlineReplay size={20} />
        </div>
        {/* Filters Content */}
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h5 className="font-semibold text-[14px]">Толко премиум</h5>
            <Image src="/Images/Switch.svg" alt="Switch" width={24} height={24} />
          </div>
            <hr className="text-[#F2F1F5] mb-4" />

             {/* Accordion 1: Ценовой диапазон */}
             <div className="mb-4">
               <button
                 onClick={() => toggleAccordion(0)}
                 className="w-full flex justify-between items-center p-3 cursor-pointer"
               >
                 <span className="font-semibold text-[14px] text-gray-800">
                   Ценовой диапазон
                 </span>
                 {expandedAccordions.includes(0) ? (
                   <MdExpandLess size={20} />
                 ) : (
                   <MdExpandMore size={20} />
                 )}
               </button>
               {expandedAccordions.includes(0) && (
                 <div className="mt-2 bg-white rounded-lg">
                   <PriceRangeSlider
                     min={0}
                     max={10000000}
                     step={100000}
                     priceGap={500000}
                     onPriceChange={handlePriceChange}
                   />
                 </div>
               )}
             </div>

             <hr className="text-[#F2F1F5] mb-4" />
             {/* Accordion 2: По специализации */}
             <div className="mb-4">
               <button
                 onClick={() => toggleAccordion(4)}
                 className="w-full flex justify-between items-center p-3 cursor-pointer"
               >
                <span className="font-semibold text-[14px] text-gray-800">
                  По специализации
                </span>
                {expandedAccordions.includes(4) ? (
                  <MdExpandLess size={20} />
                ) : (
                  <MdExpandMore size={20} />
                )}
              </button>
              {expandedAccordions.includes(4) && (
                <div className="mt-2 p-3 bg-white rounded-lg">
                  <div className="space-y-2">
                    <label className="container">
                      <input type="checkbox" defaultChecked />
                      <span className="checkmark"></span>
                      <span className="text-sm text-gray-700">
                        Все специализации
                      </span>
                    </label>
                    <label className="container">
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                      <span className="text-sm text-gray-700">
                        IT и программирование
                      </span>
                    </label>
                    <label className="container">
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                      <span className="text-sm text-gray-700">
                        Дизайн и креатив
                      </span>
                    </label>
                    <label className="container">
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                      <span className="text-sm text-gray-700">
                        Маркетинг и SMM
                      </span>
                    </label>
                    <label className="container">
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                      <span className="text-sm text-gray-700">
                        Бизнес и предпринимательство
                      </span>
                    </label>
                    <label className="container">
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                      <span className="text-sm text-gray-700">
                        Образование и наука
                      </span>
                    </label>
                    <label className="container">
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                      <span className="text-sm text-gray-700">
                        Финансы и инвестиции
                      </span>
                    </label>
                  </div>
                </div>
               )}
             </div>

             <hr className="text-[#F2F1F5] mb-4" />
             {/* Accordion 3: По уровню */}
             <div className="mb-4">
               <button
                 onClick={() => toggleAccordion(1)}
                 className="w-full flex justify-between items-center p-3 cursor-pointer"
               >
                <span className="font-semibold text-[14px] text-gray-800">
                  По уровню
                </span>
                {expandedAccordions.includes(1) ? (
                  <MdExpandLess size={20} />
                ) : (
                  <MdExpandMore size={20} />
                )}
              </button>
              {expandedAccordions.includes(1) && (
                <div className="mt-2 p-3 bg-white rounded-lg">
                  <div className="space-y-2">
                    <label className="container">
                      <input type="checkbox" defaultChecked />
                      <span className="checkmark"></span>
                      <span className="text-sm text-gray-700">Все уровни</span>
                    </label>
                    <label className="container">
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                      <span className="text-sm text-gray-700">Начинающий</span>
                    </label>
                    <label className="container">
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                      <span className="text-sm text-gray-700">Средний</span>
                    </label>
                    <label className="container">
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                      <span className="text-sm text-gray-700">Продвинутый</span>
                    </label>
                  </div>
                </div>
               )}
             </div>

             <hr className="text-[#F2F1F5] mb-4" />
             {/* Accordion 4: По языку */}
             <div className="mb-4">
               <button
                 onClick={() => toggleAccordion(2)}
                 className="w-full flex justify-between items-center p-3 cursor-pointer"
               >
                <span className="font-semibold text-[14px] text-gray-800">
                  По языку
                </span>
                {expandedAccordions.includes(2) ? (
                  <MdExpandLess size={20} />
                ) : (
                  <MdExpandMore size={20} />
                )}
              </button>
              {expandedAccordions.includes(2) && (
                <div className="mt-2 p-3 bg-white rounded-lg">
                  <div className="space-y-2">
                    <label className="container">
                      <input type="checkbox" defaultChecked />
                      <span className="checkmark"></span>
                      <span className="text-sm text-gray-700">Все языки</span>
                    </label>
                    <label className="container">
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                      <span className="text-sm text-gray-700">Русский</span>
                    </label>
                    <label className="container">
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                      <span className="text-sm text-gray-700">Узбекский</span>
                    </label>
                    <label className="container">
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                      <span className="text-sm text-gray-700">Английский</span>
                    </label>
                  </div>
                </div>
               )}
             </div>

             <hr className="text-[#F2F1F5] mb-4" />
             {/* Accordion 5: По статусу ментора */}
             <div className="mb-4">
               <button
                 onClick={() => toggleAccordion(3)}
                 className="w-full flex justify-between items-center p-3 cursor-pointer"
               >
                <span className="font-semibold text-[14px] text-gray-800">
                  По статусу ментора
                </span>
                {expandedAccordions.includes(3) ? (
                  <MdExpandLess size={20} />
                ) : (
                  <MdExpandMore size={20} />
                )}
              </button>
              {expandedAccordions.includes(3) && (
                <div className="mt-2 p-3 bg-white rounded-lg">
                  <div className="space-y-2">
                    <label className="container">
                      <input type="checkbox" defaultChecked />
                      <span className="checkmark"></span>
                      <span className="text-sm text-gray-700">Все менторы</span>
                    </label>
                    <label className="container">
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                      <span className="text-sm text-gray-700">Онлайн</span>
                    </label>
                    <label className="container">
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                      <span className="text-sm text-gray-700">Офлайн</span>
                    </label>
                    <label className="container">
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                      <span className="text-sm text-gray-700">Гибридный</span>
                    </label>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-[75%] p-1">
          <h1 className="font-semibold text-[24px]">Все курсы</h1>

          {/* Search Input */}
          <div className="mt-4 mb-6">
            <div className="relative">
              <MdSearch
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#0B0C0B]"
                size={20}
              />
              <input
                type="text"
                placeholder="Ищите курсы"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-[#E5E5E5] rounded-[12px] outline-none transition-all"
              />
        </div>
      </div>

        {/* Courses Grid */}
          <div className="gap-6 mt-6 grid grid-cols-2">
          {filteredCourses.map((course) => (
            <Link
              key={course.id}
              href={`/course/${course.id}`}
              className="bg-white rounded-2xl border border-[#E5E5E5] hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer"
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
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCoursesPage;