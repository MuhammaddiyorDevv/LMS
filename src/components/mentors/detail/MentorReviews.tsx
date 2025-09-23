"use client";

import React from "react";
import { IoStar } from "react-icons/io5";
import { MentorReviewsProps } from "../../../types/mentors/detail";
import {
  getMentorReviews,
  getMentorReviewCount,
} from "../../../data/mentors/detail";

const MentorReviews: React.FC<MentorReviewsProps> = ({ reviews, mentorId }) => {
  const mentorReviews = reviews || (mentorId ? getMentorReviews(mentorId) : []);
  const totalReviews = mentorId
    ? getMentorReviewCount(mentorId)
    : mentorReviews.length;

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Отзывы студентов</h2>
      <div className="space-y-4">
        {mentorReviews.map((review) => (
          <div
            key={review.id}
            className="border border-gray-200 rounded-lg p-4"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-gray-600 text-sm font-semibold">
                  {review.name.charAt(0)}
                </span>
              </div>
              <div>
                <div className="font-semibold text-sm">{review.name}</div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <IoStar
                      key={i}
                      className={`text-sm ${
                        i < review.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-xs text-gray-500 ml-1">
                    {review.date}
                  </span>
                </div>
              </div>
            </div>
            <p className="text-gray-700 text-sm">{review.comment}</p>
          </div>
        ))}

        {totalReviews > mentorReviews.length && (
          <div className="text-center mt-6">
            <button className="text-[#567D4A] hover:underline text-sm">
              Показать все отзывы ({totalReviews})
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MentorReviews;
