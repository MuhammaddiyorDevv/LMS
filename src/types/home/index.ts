import React from 'react';

// Course data interface
export interface Course {
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

// New Course data interface
export interface NewCourse {
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
  uroven: {
    Beginning: React.ComponentType;
    Intermediate: React.ComponentType;
    Master: React.ComponentType;
  };
  level: 'Beginning' | 'Intermediate' | 'Master';
}

// Mentor data interface
export interface Mentor {
  id: number;
  name: string;
  title: string;
  avatar: string;
}
