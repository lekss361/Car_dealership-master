import './Review.scss';
import React from 'react';
import YouTube from 'react-youtube';

export interface ReviewProps {
  clientName: string;
  clientReviewText: string;
  youtubeId: string;
}

export const Review = (props: ReviewProps) => {
  return (
    <div className="reviews-section">
      <div className="review">
        <YouTube className="video" videoId={props.youtubeId} />
        <div className="client-block">
          <div className="client-name">{props.clientName}</div>
          <div className="client-review">{props.clientReviewText}</div>
        </div>
      </div>
    </div>
  );
};
