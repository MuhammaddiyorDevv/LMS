import React from "react";

export interface Mentor {
  id: number;
  name: string;
  title: string;
  description: string;
  rating: number;
  hourlyRate: string;
  avatar: string;
  specialization: string[];
  experience: number; 
  languages: string[];
  status: "online" | "offline" | "hybrid";
  isPremium: boolean;
  studentsCount: number;
  coursesCount: number;
  responseTime: string;
  location?: string;
  icons?: {
    experience: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    courses: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    students: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    heart: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  };
}

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

export interface AccordionState {
  expandedAccordions: number[];
  toggleAccordion: (index: number) => void;
}
