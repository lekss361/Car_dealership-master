import './ReviewsSection.scss';
import { Review } from '../Review/Review';
import { reviews } from '../../models';
import React from 'react';

export interface ReviewsProps {
  reviewsCount?: number;
}

export const ReviewsSection = (props: ReviewsProps) => {
  const count = props.reviewsCount !== undefined ? props.reviewsCount : 3;
  const reviewArray = reviews.slice(0, count);
  return (
    <section>
      <div className="header">Отзывы</div>
      <div className="reviews-block">
        {reviewArray.map((item) => (
          <Review key={item.youtubeId} youtubeId={item.youtubeId} clientName={item.clientName} clientReviewText={item.clientReviewText} />
        ))}
      </div>
    </section>
  );
};
