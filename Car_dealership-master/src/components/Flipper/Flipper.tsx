import '../../index.scss';
import 'keen-slider/keen-slider.min.css';
// eslint-disable-next-line sort-imports-es6-autofix/sort-imports-es6
import './Flipper.scss'; // styles must be after native ones for correct render
import { useKeenSlider } from 'keen-slider/react';
import React, { ReactNode, useState } from 'react';
import useWindowDimensions from '../../hooks/useWindowDimensions';

interface FlipperProps {
  node: ReactNode | ReactNode[];
  perView?: 'auto' | number | (() => number | 'auto');
  isDotsHide?: boolean;
}

export const Flipper = (props: FlipperProps) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const { height, width } = useWindowDimensions();
  const [loaded, setLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(width > 1000);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slides: { origin: 'auto', perView: isMobile ? props.perView : 1, spacing: 30 },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  function Arrow(props: { disabled: boolean; left?: boolean; onClick: React.MouseEventHandler<SVGSVGElement> }) {
    const disabeld = props.disabled ? ' arrow--disabled' : '';
    return (
      <svg
        onClick={props.onClick}
        visibility={isMobile ? 'visible' : 'hidden'}
        className={`arrow ${props.left ? 'arrow--left' : 'arrow--right'} ${disabeld}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        {
          <path d="M2.82752 5.40594L7.98735 0.246294C8.31557 -0.0820914 8.84774 -0.0820914 9.17581 0.246294C9.5039 0.574387 9.5039 1.10652 9.17581 1.43459L4.61016 6.00009L9.17567 10.5654C9.50377 10.8937 9.50377 11.4257 9.17567 11.7538C8.84758 12.0821 8.31544 12.0821 7.98721 11.7538L2.82739 6.5941C2.66334 6.42998 2.58141 6.2151 2.58141 6.00011C2.58141 5.78502 2.6635 5.56999 2.82752 5.40594Z" />
        }
      </svg>
    );
  }

  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          {loaded && instanceRef.current && (
            <>
              <Arrow left onClick={(e: React.MouseEvent<SVGSVGElement>) => instanceRef.current?.prev()} disabled={currentSlide === 0} />

              <Arrow
                onClick={(e: React.MouseEvent<SVGSVGElement>) => instanceRef.current?.next()}
                disabled={currentSlide === instanceRef.current.track.details.slides.length - 1}
              />
            </>
          )}
          <div className="sliders-block">
            {React.Children.map(props.node, (item, index) => (
              <div className="keen-slider__slide number-slide2">{item}</div>
            ))}
          </div>
        </div>
      </div>
      {!props.isDotsHide && loaded && instanceRef.current && (
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
    </>
  );
};
