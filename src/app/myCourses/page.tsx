import React from "react";
import Image from "next/image";

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

// Course data
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

const page = () => {
  return (
    <div className="min-h-screen">
      <div className=" mx-auto">
        {/* Header Section */}
        <div className="mb-5">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Мои курсы</h1>

          {/* Tab Navigation */}
          <div className="flex gap-4">
            <button
              className="py-3 px-6 bg-[#567D4A] rounded-xl text-white font-medium shadow-sm hover:bg-[#4a6b3e] transition-colors"
              aria-label="Мои курсы"
            >
              Мои курсы
            </button>
            <button
              className="bg-white py-3 px-6 rounded-xl text-gray-600 font-medium shadow-sm hover:bg-gray-50 transition-colors border border-gray-200"
              aria-label="Архив"
            >
              Архив
            </button>
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl items-start flex  hover:shadow-xl transition-shadow duration-300 overflow-hidden p-4 border border-[#E5E5E5]"
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
    </div>
  );
};

export default page;
