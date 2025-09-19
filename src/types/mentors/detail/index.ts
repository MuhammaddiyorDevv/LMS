import React from 'react';

// Review interface for mentor reviews
export interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
  avatar?: string;
}

// Mentor profile props interface
export interface MentorProfileProps {
  mentor: {
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
    status: 'online' | 'offline' | 'hybrid';
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
  };
}

// Mentor details props interface
export interface MentorDetailsProps {
  mentor: {
    id: number;
    name: string;
    description: string;
    specialization: string[];
    languages: string[];
  };
}

// Mentor reviews props interface
export interface MentorReviewsProps {
  reviews?: Review[];
  mentorId?: number;
}

// Mentor stats interface
export interface MentorStats {
  experience: number;
  coursesCount: number;
  studentsCount: number;
  rating: number;
  totalReviews: number;
}

// Mentor contact info interface
export interface MentorContactInfo {
  name: string;
  hourlyRate: string;
  responseTime: string;
  status: 'online' | 'offline' | 'hybrid';
  location?: string;
}

// Action button interface
export interface ActionButton {
  id: string;
  label: string;
  variant: 'primary' | 'secondary' | 'outline';
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  onClick?: () => void;
  href?: string;
}

// Mentor detail page props
export interface MentorDetailPageProps {
  mentorId: number;
}

// Error state interface
export interface MentorErrorState {
  type: 'not_found' | 'loading' | 'error';
  message: string;
  showBackButton?: boolean;
}
