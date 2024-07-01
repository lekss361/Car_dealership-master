import '../../index.scss';
import './LocationPage.scss';
import { Info } from '../../components/Info/Info';
import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';
import React from 'react';
import mark from './assets/mark.svg';

export const Location = () => {
  const coordinates: number[] = [55.597073, 37.511814];
  return (
    <YMaps>
      <div className="container">
        <Map defaultState={{ center: coordinates, zoom: 16 }} style={{ width: '100%', height: 570 }}>
          <Placemark
            geometry={coordinates}
            properties={{ iconCaption: 'Альфа Метка' }}
            options={{
              iconLayout: 'default#image',
              iconImageHref: mark,
              iconImageSize: [48, 66],
            }}
          />
        </Map>

        <Info />
      </div>
    </YMaps>
  );
};
