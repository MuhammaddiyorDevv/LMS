// Mentor data interface for mentors page
export interface Mentor {
  id: number;
  name: string;
  title: string;
  description: string;
  rating: number;
  hourlyRate: string;
  avatar: string;
  specialization: string[];
  experience: number; // years of experience
  languages: string[];
  status: 'online' | 'offline' | 'hybrid';
  isPremium: boolean;
  studentsCount: number;
  coursesCount: number;
  responseTime: string; // e.g., "2 hours"
  location?: string;
}

// Filter options interface for mentors
export interface MentorFilterOptions {
  priceRange: {
    min: number;
    max: number;
  };
  specialization: string[];
  experience: string[];
  language: string[];
  status: string[];
  isPremium: boolean;
}

// Accordion state interface
export interface AccordionState {
  expandedAccordions: number[];
  toggleAccordion: (index: number) => void;
}
