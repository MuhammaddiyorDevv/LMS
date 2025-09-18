// Course data interface for allCourses page
export interface AllCoursesPageCourse {
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

// Filter options interface
export interface FilterOptions {
  priceRange: {
    min: number;
    max: number;
  };
  specialization: string[];
  level: string[];
  language: string[];
  mentorStatus: string[];
  isPremium: boolean;
}

// Accordion state interface
export interface AccordionState {
  expandedAccordions: number[];
  toggleAccordion: (index: number) => void;
}
