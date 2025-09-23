import { AllCoursesPageCourse } from "../allCourses";

export interface CourseDetail extends AllCoursesPageCourse {
  fullDescription: string;
  keyPoints: string[];
  courseLessons: Array<{
    id: number;
    title: string;
    duration: string;
    videoUrl?: string;
  }>;
  authors: Array<{
    id: number;
    name: string;
    avatar: string;
    role: string;
    bio?: string;
  }>;
  reviews: Review[];
  offerEndTime?: string;
}

export interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  time: string;
  comment: string;
}

export interface CourseLesson {
  id: number;
  title: string;
  duration: string;
  videoUrl?: string;
  isCompleted?: boolean;
}

export interface CourseAuthor {
  id: number;
  name: string;
  avatar: string;
  role: string;
  bio?: string;
}

export interface CourseSidebarSection {
  id: string;
  title: string;
  href: string;
}
