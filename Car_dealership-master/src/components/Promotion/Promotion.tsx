import '../../index.scss';
import './Promotion.scss';
import { promotions } from './models';
import InputMask from 'react-input-mask';
import React from 'react';

export interface PromotionProps {
  img: string;
  header: string;
  text: string;
}

export const Promotion = () => {
  const promotion = promotions[Math.floor(Math.random() * promotions.length)];

  return (
    <section>
      <div className="promotion-block">
        <div className="images-block">
          <img src={promotion.img} alt={promotion.img}></img>
        </div>
        <div className="promotion">
          <div className="promotion-header">{promotion.header}</div>
          <div className="text">{promotion.text}</div>
          <div className="contact-block">
            <InputMask className="input" mask="+7 999 999 99 99" placeholder="Ваш телефон" />
            <button className="btn">Получить предложение</button>
          </div>
          <div className="footer">Нажимая кнопку “Отправить” Вы даете согласие на обработку своих персональных данных</div>
        </div>
      </div>
    </section>
  );
};
