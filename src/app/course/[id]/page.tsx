"use client";

import React from "react";
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

interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  time: string;
  comment: string;
}

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
  const courseId = parseInt(params.id as string);
  const course = getCourseById(courseId);

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

  const handleLessonClick = (lessonId: number) => {
    console.log(`Lesson ${lessonId} clicked`);
  };

  const handleBuyNow = () => {
    console.log("Buy now clicked");
  };

  const handleAddToCart = () => {
    console.log("Add to cart clicked");
  };

  return (
    <div className="min-h-screen">
      <div className="mx-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <CourseDetailHeader
              title="Мастер-класс по UX: Улучшение пользовательского опыта для оптимального дизайна"
              badge="TOP RATED"
            />

            <CourseVideoSection image={course.image} title={course.title} />

            <CourseDescription
              fullDescription={course.fullDescription}
              keyPoints={course.keyPoints}
            />

            <CourseContent 
              lessons={course.courseLessons}
              onLessonClick={handleLessonClick}
            />

            <CourseReviews
              reviews={course.reviews}
              averageRating={course.rating}
              totalReviews={142}
            />

            <CourseAuthors
              authors={course.authors}
              aboutText="Мастер-класс по UX - это комплексный и захватывающий курс, призванный дать участникам знания и навыки, необходимые для создания исключительного пользовательского опыта. В современном цифровом мире пользовательский опыт (UX) стал важнейшим фактором, определяющим успех любого продукта или услуги. Этот курс предназначен как для начинающих UX-дизайнеров, стремящихся заложить прочный фундамент, так и для опытных профессионалов, стремящихся усовершенствовать свои знания."
            />
          </div>

          <CourseSidebar 
            price={course.price}
            offerEndTime={course.offerEndTime}
            participants={course.participants}
            lessons={course.lessons}
            duration={course.duration}
            onBuyNow={handleBuyNow}
            onAddToCart={handleAddToCart}
          />
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;
