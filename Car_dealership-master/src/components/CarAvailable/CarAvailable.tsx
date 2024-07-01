import '../IndividualCarContainer/IndividualCarContainer.scss';
import './CarAvailable.scss';
import { Car } from '../../models/car';
import { IndividualCarContainer } from '../IndividualCarContainer/IndividualCarContainer';
import React from 'react';
import carSpecial from './assets/car.png';

export const carAvailable: Car[] = [
  {
    id: 1,
    type: 'Skoda Octavia1',
    model: '1.6 MPI MT Active',
    photo: carSpecial,
    profit: 'до 300 000 ₽',
    gifts: ['Оборудование', 'КАСКО', 'Комплект резины'],
    price: 'от 1 615 000 ₽',
    credit: 'от 115 000 ₽/мес.',
    horsePower: ' 115',
    gasStation: '5.3',
    speed: '189',
    overclocking: '10,3',
    condition: 'NEW_CARS',
  },
  {
    id: 2,
    type: 'Skoda Octavia2',
    model: '1.6 MPI MT Active',
    photo: carSpecial,
    profit: 'до 300 000 ₽',
    gifts: ['Оборудование', 'КАСКО', 'Комплект резины'],
    price: 'от 1 615 000 ₽',
    credit: 'от 125 000 ₽/мес.',
    horsePower: ' 115',
    gasStation: '5.3',
    speed: '189',
    overclocking: '10,3',
    condition: 'NEW_CARS',
  },
  {
    id: 3,
    type: 'Skoda Octavia3',
    model: '1.6 MPI MT Active',
    photo: carSpecial,
    profit: 'до 300 000 ₽',
    gifts: ['Оборудование', 'КАСКО', 'Комплект резины'],
    price: 'от 1 620 000 ₽',
    credit: 'от 115 000 ₽/мес.',
    horsePower: ' 115',
    gasStation: '5.3',
    speed: '189',
    overclocking: '10,3',
    condition: 'NEW_CARS',
  },
  {
    id: 4,
    type: 'Skoda Octavia4',
    model: '1.6 MPI MT Active',
    photo: carSpecial,
    profit: 'до 300 000 ₽',
    gifts: ['Оборудование', 'КАСКО', 'Комплект резины'],
    price: 'от 1 615 000 ₽',
    credit: 'от 115 000 ₽/мес.',
    horsePower: ' 115',
    gasStation: '5.3',
    speed: '189',
    overclocking: '10,3',
    condition: 'OLD_CARS',
  },
  {
    id: 5,
    type: 'Skoda Octavia5',
    model: '1.6 MPI MT Active',
    photo: carSpecial,
    profit: 'до 300 000 ₽',
    gifts: ['Оборудование', 'КАСКО', 'Комплект резины'],
    price: 'от 1 615 000 ₽',
    credit: 'от 115 000 ₽/мес.',
    horsePower: ' 115',
    gasStation: '5.3',
    speed: '189',
    overclocking: '10,3',
    condition: 'OLD_CARS',
  },
  {
    id: 6,
    type: 'Skoda Octavia6',
    model: '1.6 MPI MT Active',
    photo: carSpecial,
    profit: 'до 300 000 ₽',
    gifts: ['Оборудование', 'КАСКО', 'Комплект резины'],
    price: 'от 1 615 000 ₽',
    credit: 'от 115 000 ₽/мес.',
    horsePower: ' 115',
    gasStation: '5.3',
    speed: '189',
    overclocking: '10,3',
    condition: 'OLD_CARS',
  },
];

export const CarAvailable = () => {
  return (
    <div className="car-with-pts-block">
      <h3 className="header-pts">Автомобили в наличии с ПТС</h3>
      <div className="main-car-container">
        {carAvailable.map((item) => (
          <IndividualCarContainer key={`carAvailable -${item.id}`} item={item} />
        ))}
      </div>
      <button className="show">Показать еще</button>
    </div>
  );
};
