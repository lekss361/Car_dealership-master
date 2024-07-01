import { PromotionProps } from './Promotion';

import cars from './assets/cars.png';
import glove from './assets/boxing glove.png';

export const promotions: PromotionProps[] = [
  {
    img: glove,
    header: 'Перебьем предложения от конкурентов!',
    text: 'Скидки от 10 до 25% на стоимость автомобиля',
  },
  {
    img: cars,
    header: 'Выгодный Trade-in от 1,9% По льготной ставке',
    text: 'Обменяйте свой автомобиль на новый с максимальной скидкой',
  },
];
