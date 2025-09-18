// Course data interface for myCourses page
export interface MyCourse {
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

// Tab navigation interface
export interface TabOption {
  id: string;
  label: string;
  isActive: boolean;
}

// Tab navigation props interface
export interface TabNavigationProps {
  tabs: TabOption[];
  onTabChange: (tabId: string) => void;
}
