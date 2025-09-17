"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
  MdArrowBack,
  MdPlayArrow,
  MdAccessTime,
  MdPeople,
  MdSchool,
  MdStar,
  MdCheckCircle,
} from "react-icons/md";
import { FaStar } from "react-icons/fa";

// Course data interface (same as in allCourses)
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

// Sample course data (in a real app, this would come from an API)
const courses: NewCourse[] = [
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

const CourseDetailPage = () => {
  const params = useParams();
  const router = useRouter();
  const courseId = parseInt(params.id as string);

  const course = courses.find((c) => c.id === courseId);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Курс не найден
          </h1>
          <Link
            href="/allCourses"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Вернуться к курсам
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Course Hero Section */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-8">
              <div className="relative h-64 md:h-80">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-400 text-sm" />
                      <span className="text-white text-sm font-semibold">
                        {course.rating}
                      </span>
                    </div>
                    <span className="text-white text-sm">
                      ({course.participants.toLocaleString()} участников)
                    </span>
                  </div>
                  <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {course.title}
                  </h1>
                </div>
              </div>
            </div>

            {/* Course Description */}
            <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Описание курса
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {course.description}
              </p>
            </div>

            {/* Course Curriculum */}
            <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-6">
                Программа курса
              </h2>
              <div className="space-y-4">
                {Array.from({ length: course.lessons }, (_, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-shrink-0">
                      <MdPlayArrow className="text-blue-600 text-xl" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-800">
                        Урок {i + 1}: Введение в тему
                      </h3>
                      <p className="text-sm text-gray-600">
                        Продолжительность: 15-20 минут
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <MdCheckCircle className="text-green-500 text-xl" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Instructor Info */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">
                О преподавателе
              </h2>
              <div className="flex items-start gap-4">
                <Image
                  src={course.instructor.avatar}
                  alt={course.instructor.name}
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {course.instructor.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Опытный преподаватель с многолетним стажем в области IT и
                    дизайна. Специализируется на современных технологиях и
                    помогает студентам достигать профессиональных высот.
                  </p>
                  <div className="flex items-center gap-6 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <MdSchool className="text-blue-600" />
                      <span>5+ лет опыта</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MdPeople className="text-blue-600" />
                      <span>10,000+ студентов</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MdStar className="text-blue-600" />
                      <span>4.8 рейтинг</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky flex flex-col top-8 gap-5">
              {/* What You'll Learn */}
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-sm text-gray-600">О курсе</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-sm text-gray-600">
                      Ключевой момент
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-sm text-gray-600">Отзывы</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-sm text-gray-600">Об авторах</span>
                  </li>
                </ul>
              </div>

              {/* Course Info Card */}
              <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {course.price}
                  </div>
                  <div className="text-sm text-gray-600">
                    Единоразовая оплата
                  </div>
                </div>

                <button className="w-full bg-[#567D4A] text-white py-3 px-6 rounded-[99px] font-semibold hover:text-[#567D4A] hover:bg-white border-[1px] border-[#567D4A] transition-colors mb-4">
                  Записаться на курс
                </button>

                <div className="space-y-4">
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-2">
                      <MdAccessTime className="text-gray-600" />
                      <span className="text-sm text-gray-600">
                        Длительность
                      </span>
                    </div>
                    <span className="text-sm font-medium text-gray-800">
                      {course.duration}
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-2">
                      <MdSchool className="text-gray-600" />
                      <span className="text-sm text-gray-600">Уроков</span>
                    </div>
                    <span className="text-sm font-medium text-gray-800">
                      {course.lessons}
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-2">
                      <MdPeople className="text-gray-600" />
                      <span className="text-sm text-gray-600">Участников</span>
                    </div>
                    <span className="text-sm font-medium text-gray-800">
                      {course.participants.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-2">
                      <MdStar className="text-gray-600" />
                      <span className="text-sm text-gray-600">Рейтинг</span>
                    </div>
                    <span className="text-sm font-medium text-gray-800">
                      {course.rating}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;
