import { Review } from "../../../types/mentors/detail";

export const mentorReviews: Record<number, Review[]> = {
  1: [
    {
      id: 1,
      name: "Анна Петрова",
      rating: 5,
      comment:
        "Отличный ментор! Очень понятно объясняет сложные темы. Помог мне освоить React за короткое время.",
      date: "2 недели назад",
      avatar: "/Images/Avatar.svg",
    },
    {
      id: 2,
      name: "Михаил Иванов",
      rating: 5,
      comment:
        "Профессиональный подход к обучению. Рекомендую всем, кто хочет серьезно изучать программирование.",
      date: "1 месяц назад",
      avatar: "/Images/Avatar.svg",
    },
    {
      id: 3,
      name: "Елена Смирнова",
      rating: 4,
      comment:
        "Хороший ментор, но иногда бывает сложно дозвониться. В остальном все отлично!",
      date: "3 недели назад",
      avatar: "/Images/Avatar.svg",
    },
  ],
  2: [
    {
      id: 4,
      name: "Дмитрий Козлов",
      rating: 5,
      comment:
        "Превосходный дизайнер! Помог мне создать потрясающий UI для моего проекта.",
      date: "1 неделя назад",
      avatar: "/Images/Avatar.svg",
    },
    {
      id: 5,
      name: "Ольга Новикова",
      rating: 5,
      comment:
        "Очень креативный подход к дизайну. Научила меня многим полезным техникам.",
      date: "2 недели назад",
      avatar: "/Images/Avatar.svg",
    },
  ],
  3: [
    {
      id: 6,
      name: "Сергей Волков",
      rating: 4,
      comment:
        "Хорошие знания в области маркетинга. Помог с продвижением моего бизнеса.",
      date: "1 неделя назад",
      avatar: "/Images/Avatar.svg",
    },
    {
      id: 7,
      name: "Мария Лебедева",
      rating: 5,
      comment:
        "Отличный эксперт по SMM. Результаты видны уже через месяц работы.",
      date: "3 недели назад",
      avatar: "/Images/Avatar.svg",
    },
  ],
  4: [
    {
      id: 8,
      name: "Алексей Морозов",
      rating: 5,
      comment:
        "Превосходный бизнес-коуч! Помог мне запустить успешный стартап.",
      date: "2 недели назад",
      avatar: "/Images/Avatar.svg",
    },
    {
      id: 9,
      name: "Татьяна Соколова",
      rating: 5,
      comment:
        "Очень мудрые советы по развитию бизнеса. Рекомендую всем предпринимателям.",
      date: "1 месяц назад",
      avatar: "/Images/Avatar.svg",
    },
  ],
  5: [
    {
      id: 10,
      name: "Игорь Павлов",
      rating: 5,
      comment:
        "Отличный специалист по Data Science. Помог мне освоить Python и машинное обучение.",
      date: "1 неделя назад",
      avatar: "/Images/Avatar.svg",
    },
    {
      id: 11,
      name: "Наталья Кузнецова",
      rating: 4,
      comment:
        "Хорошие знания в области анализа данных. Полезные практические советы.",
      date: "2 недели назад",
      avatar: "/Images/Avatar.svg",
    },
  ],
  6: [
    {
      id: 12,
      name: "Владимир Степанов",
      rating: 5,
      comment:
        "Превосходный финансовый консультант! Помог мне разобраться с инвестициями.",
      date: "1 неделя назад",
      avatar: "/Images/Avatar.svg",
    },
    {
      id: 13,
      name: "Екатерина Медведева",
      rating: 4,
      comment: "Хорошие советы по управлению личными финансами. Очень полезно!",
      date: "3 недели назад",
      avatar: "/Images/Avatar.svg",
    },
  ],
};

export const getMentorReviews = (mentorId: number): Review[] => {
  return mentorReviews[mentorId] || [];
};

export const getMentorReviewCount = (mentorId: number): number => {
  return mentorReviews[mentorId]?.length || 0;
};

export const getMentorAverageRating = (mentorId: number): number => {
  const reviews = mentorReviews[mentorId];
  if (!reviews || reviews.length === 0) return 0;

  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
  return Math.round((totalRating / reviews.length) * 10) / 10; 
};
