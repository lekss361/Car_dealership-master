import '../../index.scss';
import './ReviewsPage.scss';
import { ReviewsSection } from './components/ReviewsSection/ReviewsSection';
import { reviews } from './models';
import YouTube, { YouTubeProps } from 'react-youtube';

export const ReviewsPage = () => {
  return (
    <>
      <ReviewsSection />
      <section>
        <div className="button-block">
          <button className="btn">Показать еще</button>
        </div>
      </section>
    </>
  );
};
