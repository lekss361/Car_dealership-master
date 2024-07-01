import '../../../index.scss';
import './AboutCompany.scss';
import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

export const AboutCompany = () => {
  const opts: YouTubeProps['opts'] = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <section id="about-company-container">
      <h2>О компании</h2>
      <p>
        Мы располагаем огромной торговой площадкой более 5000 квадратных метров, у нас в наличии не менее 200 автомобилей как отечественного, так и
        иностранного производства. В штате автосалона «Альтера» работают настоящие профессионалы, которые знают особенности каждого конкретного
        автомобиля.
      </p>
      <YouTube className="video" videoId="1rS2L2Zy3Ks?si=9j5iPMmpWZeT_U4W" opts={opts} />
    </section>
  );
};
