import './Carousel.scss';
import 'keen-slider/keen-slider.min.css';
import { string } from 'yargs';
import { useKeenSlider } from 'keen-slider/react';
import KeenSlider from 'keen-slider';
import React, { useState } from 'react';
import background from './assets/background.png';
import backgroundMob from './assets/backgroundMob.png';
import carPhoto from './assets/car-ad.png';
import useWindowDimensions from '../../../../hooks/useWindowDimensions';

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <div className="carousel-section">
      <div className="navigation">
        <div ref={sliderRef} className="keen-slider">
          <div className="basic-carousel keen-slider__slide number-slide1">
            <picture id="back">
              <source srcSet={background} media="(min-width:851px)" />
              <img src={backgroundMob} alt="backgroundMob" />
            </picture>
            <div className="full-ad">
              <p id="left-only">Осталось всего 10 авто!</p>
              <p id="advertisement">Грандиозная распродажа тестового парка!</p>
              <p id="know-price">Узнай свою цену!</p>
            </div>
            <div className="picture-with-ad">
              <img className="pic-ad" src={carPhoto} alt="carPhoto" />
            </div>
          </div>
          <div className="keen-slider__slide number-slide2">2</div>
          <div className="keen-slider__slide number-slide3">3</div>
          <div className="keen-slider__slide number-slide4">4</div>
          <div className="keen-slider__slide number-slide5">5</div>
          <div className="keen-slider__slide number-slide6">6</div>
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow left onClick={(e: React.MouseEvent<SVGSVGElement>) => instanceRef.current?.prev()} disabled={currentSlide === 0} />

            <Arrow
              onClick={(e: React.MouseEvent<SVGSVGElement>) => instanceRef.current?.next()}
              disabled={currentSlide === instanceRef.current.track.details.slides.length - 1}
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[...Array(instanceRef.current.track.details.slides.length).keys()].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={'dot' + (currentSlide === idx ? ' active' : '')}
              ></button>
            );
          })}
        </div>
      )}
    </div>
  );
}

function Arrow(props: { disabled: boolean; left?: boolean; onClick: React.MouseEventHandler<SVGSVGElement> }) {
  const disabeld = props.disabled ? ' carusel-arrow--disabled' : '';
  const { height, width } = useWindowDimensions();
  let isComputer = width > 850;
  return (
    <svg
      onClick={props.onClick}
      className={` carusel-arrow ${props.left ? 'carusel-arrow--left' : 'carusel-arrow--right'} ${disabeld} ${isComputer ? '' : 'hidden-arrow'}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />}
      {!props.left && <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />}
    </svg>
  );
}
