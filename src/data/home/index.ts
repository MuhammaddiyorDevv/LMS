import { Course, NewCourse, Mentor } from '../../types/home';

// Mentor data
export const mentors: Mentor[] = [
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
export const courses: Course[] = [
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
export const newCourses: NewCourse[] = [
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
