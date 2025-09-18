import { MyCourse } from '../../types/myCourses';

export const myCoursesData: MyCourse[] = [
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
    title: "Веб-разработка с нуля",
    description:
      "Изучите современные технологии веб-разработки: HTML, CSS, JavaScript и React.",
    instructor: {
      name: "Ахмед Каримов",
      avatar: "/Images/Lola.svg",
    },
    progress: 60,
    image: "/Images/mycourses.svg",
    gradient: "from-green-500 to-teal-600",
  },
  {
    id: 3,
    title: "Мобильная разработка",
    description:
      "Создавайте мобильные приложения для iOS и Android с помощью React Native.",
    instructor: {
      name: "Сара Алиева",
      avatar: "/Images/Lola.svg",
    },
    progress: 30,
    image: "/Images/mycourses.svg",
    gradient: "from-orange-500 to-red-600",
  },
  {
    id: 4,
    title: "UI/UX Дизайн",
    description:
      "Изучите принципы дизайна пользовательского интерфейса и создавайте красивые приложения.",
    instructor: {
      name: "Диана Нурманова",
      avatar: "/Images/Lola.svg",
    },
    progress: 95,
    image: "/Images/mycourses.svg",
    gradient: "from-purple-500 to-pink-600",
  },
];
