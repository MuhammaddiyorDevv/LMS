"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getCourseById } from "../../../data/course";
import CourseDetailHeader from "../../../components/course/CourseDetailHeader";
import CourseVideoSection from "../../../components/course/CourseVideoSection";
import CourseDescription from "../../../components/course/CourseDescription";
import CourseContent from "../../../components/course/CourseContent";
import CourseReviews from "../../../components/course/CourseReviews";
import CourseAuthors from "../../../components/course/CourseAuthors";
import CourseSidebar from "../../../components/course/CourseSidebar";

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
