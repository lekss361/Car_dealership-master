import '../../index.scss';
import './Partners.scss';
import { Flipper } from '../Flipper/Flipper';
import React from 'react';

import alfa from './assets/alfa.png';
import bks from './assets/bks.png';
import rgs from './assets/rossgosstrah.png';
import sovcomins from './assets/sovkom.png';

const partnersArray: PartnersProps[] = [
  {
    url: 'https://www.alfastrah.ru/',
    image: alfa,
  },
  {
    url: 'https://bcslife.ru/',
    image: bks,
  },
  {
    url: 'https://www.rgs.ru/',
    image: rgs,
  },
  {
    url: 'https://sovcomins.ru/',
    image: sovcomins,
  },
];

interface PartnersProps {
  url: string;
  image: string;
}

export const Partners = () => {
  const isMobileVersion = window.innerWidth < 850;
  const perView = isMobileVersion ? partnersArray.length : 3;

  return (
    <section className="partners">
      <div className="partnersHeader">Банки-партнеры</div>
      <Flipper
        isDotsHide={!isMobileVersion}
        perView={perView}
        node={partnersArray.map((item) => (
          <a href={item.url} target="_blank" rel="noreferrer" key={item.url}>
            <img src={item.image} alt={item.image}></img>
          </a>
        ))}
      />
    </section>
  );
};
