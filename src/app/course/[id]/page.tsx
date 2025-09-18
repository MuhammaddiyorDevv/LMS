"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
  MdPlayArrow,
  MdAccessTime,
  MdPeople,
  MdSchool,
  MdStar,
  MdCheckCircle,
} from "react-icons/md";
import { FiSmartphone } from "react-icons/fi";
import { FiHeadphones } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
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
      "Наряду с этим, искусство медиапланирования непосредственно специфицирует тактический комплексный анализ ситуации. Один из признанных классиков маркетинга Ф.Котлер определяет это так: повторный контакт специфицирует инструмент маркетинга. Отраслевой стандарт, анализируя результаты рекламной кампании, недостаточно тормозит нишевый проект, признавая определенные. Инвестиционный продукт поддерживает анализ зарубежного опыта. Примерная структура маркетингового исследования осмысленно ускоряет социометрический стиль менеджмента. Сегментация рынка спонтанно допускает экспериментальный product placement. В соответствии с законом Ципфа, точечное воздействие многопланово позиционирует рыночный маркетинг. Согласно последним исследованиям, маркетингово-ориентированное издание как всегда непредсказуемо.",
    rating: 4.5,
    price: "1 200 000 UZS",
    instructor: {
      name: "Попова Алёна ",
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
      "Наряду с этим, искусство медиапланирования непосредственно специфицирует тактический комплексный анализ ситуации. Один из признанных классиков маркетинга Ф.Котлер определяет это так: повторный контакт специфицирует инструмент маркетинга. Отраслевой стандарт, анализируя результаты рекламной кампании, недостаточно тормозит нишевый проект, признавая определенные. Инвестиционный продукт поддерживает анализ зарубежного опыта. Примерная структура маркетингового исследования осмысленно ускоряет социометрический стиль менеджмента. Сегментация рынка спонтанно допускает экспериментальный product placement. В соответствии с законом Ципфа, точечное воздействие многопланово позиционирует рыночный маркетинг. Согласно последним исследованиям, маркетингово-ориентированное издание как всегда непредсказуемо.",
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
      "Наряду с этим, искусство медиапланирования непосредственно специфицирует тактический комплексный анализ ситуации. Один из признанных классиков маркетинга Ф.Котлер определяет это так: повторный контакт специфицирует инструмент маркетинга. Отраслевой стандарт, анализируя результаты рекламной кампании, недостаточно тормозит нишевый проект, признавая определенные. Инвестиционный продукт поддерживает анализ зарубежного опыта. Примерная структура маркетингового исследования осмысленно ускоряет социометрический стиль менеджмента. Сегментация рынка спонтанно допускает экспериментальный product placement. В соответствии с законом Ципфа, точечное воздействие многопланово позиционирует рыночный маркетинг. Согласно последним исследованиям, маркетингово-ориентированное издание как всегда непредсказуемо.",
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
      "Наряду с этим, искусство медиапланирования непосредственно специфицирует тактический комплексный анализ ситуации. Один из признанных классиков маркетинга Ф.Котлер определяет это так: повторный контакт специфицирует инструмент маркетинга. Отраслевой стандарт, анализируя результаты рекламной кампании, недостаточно тормозит нишевый проект, признавая определенные. Инвестиционный продукт поддерживает анализ зарубежного опыта. Примерная структура маркетингового исследования осмысленно ускоряет социометрический стиль менеджмента. Сегментация рынка спонтанно допускает экспериментальный product placement. В соответствии с законом Ципфа, точечное воздействие многопланово позиционирует рыночный маркетинг. Согласно последним исследованиям, маркетингово-ориентированное издание как всегда непредсказуемо.",
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
      "Наряду с этим, искусство медиапланирования непосредственно специфицирует тактический комплексный анализ ситуации. Один из признанных классиков маркетинга Ф.Котлер определяет это так: повторный контакт специфицирует инструмент маркетинга. Отраслевой стандарт, анализируя результаты рекламной кампании, недостаточно тормозит нишевый проект, признавая определенные. Инвестиционный продукт поддерживает анализ зарубежного опыта. Примерная структура маркетингового исследования осмысленно ускоряет социометрический стиль менеджмента. Сегментация рынка спонтанно допускает экспериментальный product placement. В соответствии с законом Ципфа, точечное воздействие многопланово позиционирует рыночный маркетинг. Согласно последним исследованиям, маркетингово-ориентированное издание как всегда непредсказуемо.",
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
      "Наряду с этим, искусство медиапланирования непосредственно специфицирует тактический комплексный анализ ситуации. Один из признанных классиков маркетинга Ф.Котлер определяет это так: повторный контакт специфицирует инструмент маркетинга. Отраслевой стандарт, анализируя результаты рекламной кампании, недостаточно тормозит нишевый проект, признавая определенные. Инвестиционный продукт поддерживает анализ зарубежного опыта. Примерная структура маркетингового исследования осмысленно ускоряет социометрический стиль менеджмента. Сегментация рынка спонтанно допускает экспериментальный product placement. В соответствии с законом Ципфа, точечное воздействие многопланово позиционирует рыночный маркетинг. Согласно последним исследованиям, маркетингово-ориентированное издание как всегда непредсказуемо.",
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

// Review data interface
interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  time: string;
  comment: string;
}

// Sample review data
const reviews: Review[] = [
  {
    id: 1,
    name: "Титова Кристина",
    avatar: "/Images/Kristina.svg",
    rating: 4,
    date: "Сегодня",
    time: "13:34",
    comment:
      "Принцип восприятия, конечно, раскручивает ролевой формат события, Эволюция мерчандайзинга, вопреки мнению П.Друкеро, однообразно синхронизирует тактический рейтинг, невзирая на действия конкурентов",
  },
  {
    id: 2,
    name: "Попова Алёна ",
    avatar: "/Images/Alyona.svg",
    rating: 5,
    date: "Сегодня",
    time: "13:34",
    comment:
      "Имидж программирует показ баннера, опираясь на опыт западных коллег. Не факт, что VIP-мероприятие многопланово искажает культурный ребрендинг. Медиабизнес усиливает ролевой медиабизнес. Анализ рыночных цен отражает традиционный канал.",
  },
  {
    id: 3,
    name: "Юдина Екатерина ",
    avatar: "/Images/Yekaterina.svg",
    rating: 4,
    date: "Сегодня",
    time: "13:34",
    comment:
      "Размещение, не меняя концепции, изложенной выше, допускает анализ зарубежного опыта, не считаясь с затратами. Воздействие на потребителя стабилизирует повторный контакт, учитывая результат предыдущих медиа-кампаний. Несмотря на сложности, эластичность спроса ",
  },
  {
    id: 4,
    name: "Tитова Кристина",
    avatar: "/Images/Kristina.svg",
    rating: 5,
    date: "Сегодня",
    time: "13:34",
    comment:
      "Принцип восприятия, конечно, раскручивает ролевой формат события. Эволюция мерчандайзинга, вопреки мнению П.Друкера, однообразно синхронизирует тактический рейтинг, невзирая на действия конкурентов",
  },
];

const CourseDetailPage = () => {
  const params = useParams();
  const router = useRouter();
  const courseId = parseInt(params.id as string);
  const [visibleLessons, setVisibleLessons] = useState(7);
  const [visibleReviews, setVisibleReviews] = useState(3);

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
    <div className="min-h-screen">
      <div className=" mx-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
          {/* Main Content */}
          <div className="lg:col-span-2 ">
            <div className="bg-white p-4 rounded-[16px] mb-8">
              <div className="flex flex-col gap-2 mb-6">
                <span className="bg-[#D5EECD] text-[#567D4A] py-1 px-[6px] rounded-[4px] text-xs font-medium w-fit">
                  TOP RATED
                </span>
                <h1 className="text-[24px] md:text-[26px] font-bold text-gray-800 leading-tight">
                  Мастер-класс по UX: Улучшение пользовательского опыта для
                  оптимального дизайна
                </h1>
              </div>
              <hr className="py-[16px]" />
              {/* Course Hero Section */}
              <div className="bg-white rounded-[16px] shadow-sm overflow-hidden ">
                <div className="relative h-[380px] md:h-[380px]">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-[#567D4A] bg-opacity-20 rounded-full p-4 hover:bg-opacity-30 transition-all cursor-pointer">
                      <MdPlayArrow className="text-white text-6xl" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Course Description */}
            <div className="bg-white rounded-[16px] shadow-sm p-6 mb-8">
              <div className="w-full flex flex-col gap-[8px]">
                <p className="text-[#616161] leading-relaxed text-justify whitespace-pre-wrap break-words text-base">
                  Наряду с этим, искусство медиапланирования непосредственно
                  специфицирует тактический комплексный анализ ситуации. Один из
                  признанных классиков маркетинга Ф.Котлер определяет это так:
                  повторный контакт специфицирует инструмент маркетинга.
                  Отраслевой стандарт, анализируя результаты рекламной кампании,
                  недостаточно тормозит нишевый проект, признавая определенные
                </p>
                <p className="text-[#616161] leading-relaxed text-justify whitespace-pre-wrap break-words text-base">
                  Инвестиционный продукт поддерживает анализ зарубежного опыта.
                  Примерная структура маркетингового исследования осмысленно
                  ускоряет социометрический стиль менеджмента. Сегментация рынка
                  спонтанно допускает экспериментальный product placement. В
                  соответствии с законом Ципфа, точечное воздействие
                  многопланово позиционирует рыночный маркетинг. Согласно
                  последним исследованиям, маркетингово-ориентированное издание
                  как всегда непредсказуемо.
                </p>
              </div>
              <div className="mt-4">
                <h1 className="font-semibold text-[#0B0C0B] text-[24px]">
                  Ключевой момент
                </h1>
                <ul className=" space-y-2 text-[#616161] items-center font-medium">
                  <li className="mt-[10px]">
                    <MdCheckCircle className="inline text-[#567D4A] text-[30px] mr-2" />
                    Понимать основы создания прототипов и анимации
                  </li>
                  <li className="mt-[10px]">
                    <MdCheckCircle className="inline text-[#567D4A] text-[30px] mr-2" />
                    Понимать основы микроинтерактивности
                  </li>
                  <li className="mt-[10px]">
                    <MdCheckCircle className="inline text-[#567D4A] text-[30px] mr-2" />
                    Создание анимации (20 тематических исследований) для
                    мобильных приложений
                  </li>
                  <li className="mt-[10px]">
                    <MdCheckCircle className="inline text-[#567D4A] text-[30px] mr-2" />
                    Представление дизайна с использованием анимации
                  </li>
                </ul>
              </div>
            </div>

            {/* Course Curriculum */}
            <div className="bg-white rounded-[16px] shadow-sm p-6 mb-4">
              <h2 className="text-xl font-bold text-gray-800 mb-6">
                Содержание курса
              </h2>
              <div className="space-y-4 border-[1px] border-[#E5E5E5] rounded-[12px] py-4 px-5">
                {Array.from(
                  { length: Math.min(visibleLessons, course.lessons) },
                  (_, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 p-4 border-b border-[#E5E5E5] rounded-[12px] hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-800">
                          {i + 1}. Введение в тему
                        </h3>
                        <p className="text-sm text-gray-600">11 минут</p>
                      </div>
                      <div className="flex-shrink-0">
                        <MdPlayArrow className="text-[#567D4A] text-[36px]" />
                      </div>
                    </div>
                  )
                )}

                {visibleLessons < course.lessons && (
                  <div className="flex justify-center pt-4">
                    <button
                      onClick={() =>
                        setVisibleLessons((prev) =>
                          Math.min(prev + 7, course.lessons)
                        )
                      }
                      className="px-6 py-2 text-[#567D4A] cursor-pointer"
                    >
                      Показать больше{" "}
                      <IoIosArrowDown className="inline-block ml-2" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-white rounded-[16px] shadow-sm p-6 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <h1 className="text-[24px] font-bold text-[#0B0C0B]">
                  Отзывы (142)
                </h1>
                <div className="items-center flex gap-2">
                  <MdStar className="inline text-[#D9A055] text-[24px] mr-1" />
                  <span className="font-bold text-[#616161] text-[16px]">
                    4.5
                  </span>
                </div>
              </div>

              {/* Review Cards */}
              <div className="space-y-4">
                {reviews.slice(0, visibleReviews).map((review) => (
                  <div
                    key={review.id}
                    className="border border-[#E5E5E5] rounded-[16px] p-6"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0">
                        <Image
                          src={review.avatar}
                          alt={review.name}
                          width={60}
                          height={60}
                          className="w-15 h-15 rounded-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-[#0B0C0B] font-medium text-base">
                              {review.name}
                            </h3>
                            <p className="text-[#616161] text-sm opacity-80">
                              {review.date}, {review.time}
                            </p>
                          </div>
                          <div className="flex items-center gap-1 flex-shrink-0 ml-4">
                            {Array.from({ length: review.rating }, (_, i) => (
                              <FaStar
                                key={i}
                                className="text-[#D9A055] text-[20px]"
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-[#616161] text-sm leading-relaxed">
                          {review.comment}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

                {visibleReviews < reviews.length && (
                  <div className="flex justify-center pt-4">
                    <button
                      onClick={() =>
                        setVisibleReviews((prev) =>
                          Math.min(prev + 3, reviews.length)
                        )
                      }
                      className="px-6 py-2 text-[#567D4A] cursor-pointer"
                    >
                      Показать больше{" "}
                      <IoIosArrowDown className="inline-block ml-2" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Authors Info */}
            <div className="bg-white rounded-[16px] shadow-sm p-6 mb-8">
              <h1 className="text-[24px] font-bold text-[#0B0C0B] mb-6">
                Об авторах
              </h1>

              {/* Authors Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="flex items-start gap-4 border border-[#E5E5E5] p-4 rounded-[12px] hover:bg-gray-50 transition-colors">
                  <Image
                    src={course.instructor.avatar}
                    alt={course.instructor.name}
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-[#0B0C0B] mb-2">
                      {course.instructor.name}
                    </h3>
                    <p className="text-[#616161] mb-2">Senior UX Designer</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 border border-[#E5E5E5] p-4 rounded-[12px] hover:bg-gray-50 transition-colors">
                  <Image
                    src="/Images/Yudina.svg"
                    alt="Второй автор"
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-[#0B0C0B] mb-2">
                      Юдина Екатерина
                    </h3>
                    <p className="text-[#616161] mb-2">Senior UX Designer</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mt-6">
                <p className="text-[#616161] leading-relaxed text-justify">
                  Мастер-класс по UX - это комплексный и захватывающий курс,
                  призванный дать участникам знания и навыки, необходимые для
                  создания исключительного пользовательского опыта. В
                  современном цифровом мире пользовательский опыт (UX) стал
                  важнейшим фактором, определяющим успех любого продукта или
                  услуги. Этот курс предназначен как для начинающих
                  UX-дизайнеров, стремящихся заложить прочный фундамент, так и
                  для опытных профессионалов, стремящихся усовершенствовать свои
                  знания.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            {/* What You'll Learn */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <ul className="flex flex-col gap-[10px]">
                <li className="flex items-start gap-3">
                  <a className="text-sm text-gray-600 pt-[11px] pl-[12px] pb-[9px] hover:bg-[#F6F6F6] active:bg-[#F6F6F6] transition-colors w-full cursor-pointer rounded-lg">
                    О курсе
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <a className="text-sm text-gray-600 pt-[11px] pl-[12px] pb-[9px] hover:bg-[#F6F6F6] active:bg-[#F6F6F6] transition-colors w-full cursor-pointer rounded-lg">
                    Ключевой момент
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <a className="text-sm text-gray-600 pt-[11px] pl-[12px] pb-[9px] hover:bg-[#F6F6F6] active:bg-[#F6F6F6] transition-colors w-full cursor-pointer rounded-lg">
                    Отзывы
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <a className="text-sm text-gray-600 pt-[11px] pl-[12px] pb-[9px] hover:bg-[#F6F6F6] active:bg-[#F6F6F6] transition-colors w-full cursor-pointer rounded-lg">
                    Об авторах
                  </a>
                </li>
              </ul>
            </div>
            <div className="sticky top-8">
              {/* Course Info Card */}
              <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
                <div className="text-start mb-6">
                  <div className="text-3xl font-bold text-[#0B0C0B] mb-2">
                    {course.price}
                  </div>
                  <div className="text-sm text-[#D9A055]">
                    Предложение заканчивается через 16ч : 41м: 10с
                  </div>
                </div>

                <button className="w-full bg-[#567D4A] text-white py-3 px-6 rounded-[99px] font-semibold hover:text-[#567D4A] hover:bg-white border-[1px] border-[#567D4A] transition-colors mb-4">
                  Купить сейчас
                </button>
                <button className="w-full bg-white text-[#0B0C0B] py-3 px-6 rounded-[99px] font-semibold hover:text-[#567D4A] hover:bg-white border-[1px] border-[#E5E5E5] transition-colors mb-4">
                  Добавьте в корзину
                </button>

                <hr className="pt-5" />

                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-[10px]">
                    <div className="flex items-center gap-2">
                      <MdPeople className="text-[#567D4A]" />
                    </div>
                    <span className="text-sm font-medium text-gray-800">
                      {course.participants.toLocaleString()} учащихся
                    </span>
                  </div>

                  <div className="flex items-center gap-[10px]">
                    <div className="flex items-center gap-2">
                      <MdSchool className="text-[#567D4A]" />
                    </div>
                    <span className="text-sm font-medium text-gray-800">
                      {course.lessons} урока
                    </span>
                  </div>

                  <div className="flex items-center  gap-[10px]">
                    <div className="flex items-center gap-2">
                      <MdAccessTime className="text-[#567D4A]" />
                    </div>
                    <span className="text-sm font-medium text-gray-800">
                      4 часа 9 минут
                    </span>
                  </div>

                  <div className="flex items-center gap-[10px]">
                    <div className="flex items-center gap-2">
                      <FiSmartphone className="text-[#567D4A]" />
                    </div>
                    <span className="text-sm font-medium text-gray-800">
                      Доступно с мобильных и десктоп
                    </span>
                  </div>

                  <div className="flex items-center gap-[10px]">
                    <div className="flex items-center gap-2">
                      <MdPlayArrow className="text-[#567D4A]" />
                    </div>
                    <span className="text-sm font-medium text-gray-800">
                      Пожизненный доступ
                    </span>
                  </div>

                  <div className="flex items-center gap-[10px]">
                    <div className="flex items-center gap-2">
                      <FiHeadphones className="text-[#567D4A]" />
                    </div>
                    <span className="text-sm font-medium text-gray-800">
                      Звуковое описание в существующем аудио
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
