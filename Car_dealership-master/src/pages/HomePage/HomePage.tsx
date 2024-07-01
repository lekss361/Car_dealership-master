import './HomePage.scss';
import { AboutCompany } from '../AboutCompanyPage/components/AboutCompany';
import { AboutTabControl } from './components/AboutTabControl/AboutTabControl';
import { Blog } from '../BlogPage/BlogPage';
import { CarAvailable } from '../../components/CarAvailable/CarAvailable';
import { Location } from '../LocationPage/LocationPage';
import { Partners } from '../../components/Partners/Partners';
import { Promotion } from '../../components/Promotion/Promotion';
import { QuickSelectionPage } from '../QuickSelectionPage/QuickSelectionPage';
import { ReviewsSection } from '../ReviewsPage/components/ReviewsSection/ReviewsSection';
import Carousel from './components/Carousel/Carousel';

export const HomePage = () => {
  return (
    <>
      <Carousel />
      <QuickSelectionPage />
      <CarAvailable />
      <Partners />
      <ReviewsSection />
      <AboutCompany />
      <AboutTabControl />
      <Promotion />
      <Blog />
      <Location />
    </>
  );
};
