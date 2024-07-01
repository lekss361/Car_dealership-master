import '../../index.scss';
import './DetailInfoPage.scss';
import { Equipment } from '../../components/Equipment/Equipment';
import { Navigate, useParams } from 'react-router-dom';
import { Promotion } from '../../components/Promotion/Promotion';
import { cars } from './models/carDetailInfo';
import { equipments } from '../../components/Equipment/models/equipment';
import Dropdown from '../../components/Dropdown/Dropdown';
import React, { useState } from 'react';
import backside from './assets/backside.png';
import bottom from './assets/bottom.svg';
import front from './assets/front.png';
import frontBottom from './assets/frontBottom.svg';
import height from './assets/height.svg';
import side from './assets/side.png';

interface DetailParam {
  name: string;
  value: string;
}

interface Details {
  name: string;
  params: DetailParam[];
}

export interface CarDetailInfo {
  id: number;
  image: string;
  name: string;
  bodyLength: number;
  bodyWidth: number;
  bodyHeight: number;
  wheelbase: number;
  clearance: number;
  details: Details[];
}

export const DetailInfoPage = () => {
  const counter = 2;
  const [carsDetailsCount, setCarsParamsCount] = useState(counter);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const params = useParams();
  const car = cars.find((x: CarDetailInfo) => x.id.toString() === params.id);
  if (!car) {
    return <Navigate to="*" />;
  }

  const maxCount = car.details.length;
  const carDetails = car.details.slice(0, carsDetailsCount);

  const addContent = () => {
    const count = carDetails.length + counter;
    setCarsParamsCount(count);
    setButtonDisabled(count >= maxCount);
  };

  return (
    <div className="main-container detail-info">
      <section>
        <div className="equipment">
          <div className="header">Что входит в комплектацию Active</div>
          <div className="list">
            {equipments.map((item) => (
              <Equipment title={item.title} vales={item.vales} key={item.title} />
            ))}
          </div>
        </div>
      </section>

      <Promotion />

      <section>
        <div className="specifications">
          <div className="car-image">
            <img src={car.image} alt={car.image} />
          </div>
          <div className="header">Технические характеристики {car.name}</div>
          <div className="sizes">
            <div className="size-block">
              <img src={side} alt={side} />
              <img src={frontBottom} alt={frontBottom} />
              {car.bodyLength}
            </div>
            <div className="size-block">
              <img src={backside} alt={backside} />
              <img src={bottom} alt={bottom} />
              {car.bodyWidth}
            </div>
            <div className="size-block">
              <img src={front} alt={front} />
              <img src={bottom} alt={bottom} />
              {car.bodyWidth}
              <img className="height" src={height} alt={height} />
              <span>{car.bodyHeight}</span>
            </div>
            <div className="params">
              <div>Длина кузова, мм {car.bodyLength}</div>
              <div>Ширина кузова, мм {car.bodyWidth}</div>
              <div>Высота кузова, мм {car.bodyHeight}</div>
              <div>Колесная база, мм {car.wheelbase}</div>
              <div>Дорожный просвет, мм {car.clearance}</div>
            </div>
          </div>

          <div className="details-info-block">
            {carDetails.map((detail) => (
              <>
                <Dropdown name={detail.name} options={detail.params} isText={true} key={detail.name} />
                <hr />
              </>
            ))}
            <button className="btn" onClick={addContent} hidden={buttonDisabled}>
              Показать еще
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
