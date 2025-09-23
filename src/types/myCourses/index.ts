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

export interface TabOption {
  id: string;
  label: string;
  isActive: boolean;
}

export interface TabNavigationProps {
  tabs: TabOption[];
  onTabChange: (tabId: string) => void;
}
