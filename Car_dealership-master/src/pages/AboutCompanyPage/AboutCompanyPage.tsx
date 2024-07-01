import '../../index.scss';
import './AboutCompanyPage.scss';
import { Flipper } from '../../components/Flipper/Flipper';
import { Partners } from '../../components/Partners/Partners';
import { officePhoto } from '../../models/officePhoto';
import React from 'react';
import group from './assets/group.png';
import map from './assets/map.svg';
import workers from './assets/workers.png';

export interface OfficePhotoProps {
  id: number;
  image: string;
}

export const AboutCompanyPage = () => {
  return (
    <>
      <section className="about-company-section">
        <h1>О компании</h1>
        <p>
          Официальный дилер Азимут Варшавка предлагает широкий выбор автомобилей различных цветов и комплектаций на самых выгодных условиях. На
          территории автосалона представлено свыше двухсот новых автомобилей и с пробегом. Среди ассортимента представленных автомобилей встречаются
          наиболее популярные представители европейского, азиатского и российского производства. Для каждого клиента в нашем автосалоне
          предоставляется полная персональная консультация по любому из представленных автомобилей. Подробнее о представленных в салоне моделях Вы
          можете узнать на сайте и у наших менеджеров. Выбирая автосалон Азимут Варшавка Вы получаете: Все вопросы о наличии, цветах и комплектациях
          автомобилей, а также по работе автосалона Вы всегда можете узнать по телефону, указанному на сайте, а также при помощи формы обратной связи.
          Мы ценим каждого клиента и гарантируем высокий уровень сервиса! Азимут Варшавка — с нами Вам покорятся все направления!
        </p>

        <p>Выбирая автосалон Азимут Варшавка Вы получаете:</p>
        <ul>
          <li>самые выгодные цены на автомобили в Москве;</li>
          <li>возможность выбора автомобилей более чем из двухсот моделей различных цветов и комплектаций;</li>
          <li>приобретение автомобилей с пробегом, прошедших предпродажную подготовку и юридическую экспертизу;</li>
          <li>быстрое и качественное оформление документов;</li>
          <li>высокий уровень сервиса и индивидуальный подход;</li>
          <li>выгодное приобретение автомобиля по программам Trade-in и утилизация;</li>
          <li>сотрудничество с самыми крупными банками Москвы, предлагающими наиболее выгодные условия кредитования;</li>
          <li>
            возможность участия в программах льготного кредитования «Семейный автомобиль», и «Первый автомобиль», а также льготное условия для
            медицинских работников и тех, кто сдает свой автомобиль по программе Trade-in в счёт оплаты первоначального взноса;
          </li>
          <li>акции и подарки от автосалона при покупке автомобиля.</li>
        </ul>

        <p>
          Все вопросы о наличии, цветах и комлектациях автомобилей, а также по работе автосалона Вы всегда можете узнать по телефону, указанному на
          сайте, а так же при помощи формы обратной связи.
        </p>
        <p>Мы ценим каждого клиента и гарантируем высокий уровень сервиса!</p>
        <p>Азимут Варшавка - с нами Вам покорятся все направления!</p>

        <div className="office-block">
          <div className="office-title">Фото автосалона</div>
          <Flipper
            perView={3}
            isDotsHide={true}
            node={officePhoto.map((item: OfficePhotoProps) => {
              return <img src={item.image} alt={item.image} key={item.id} />;
            })}
          />
        </div>

        <div className="distribution-section">
          <div className="distribution-block">
            <div className="city-count">12</div>
            <div className="text">Городов присутствия</div>
            <div className="rewards">
              <div className="workers-block">
                <div className="image">
                  <img src={workers} alt={workers} />
                </div>
                <div className="reward">
                  <div className="title">1000</div>
                  <p>работников</p>
                </div>
              </div>
              <div className="group-block">
                <div className="image">
                  <img src={group} alt={group} />
                </div>
                <div className="reward">
                  <div className="title">20 лет</div>
                  <p>на рынке</p>
                </div>
              </div>
            </div>
          </div>
          <div className="map-block">
            <img src={map} alt={map} />
            <div className="point moscow">
              <div className="city">Москва</div>
            </div>
            <div className="point petersburg">
              <div className="city">Санкт-Петербург</div>
            </div>
            <div className="point astrakhan">
              <div className="city">Астрахань</div>
            </div>
            <div className="point krasnodar">
              <div className="city">Краснодар</div>
            </div>
            <div className="point vologda">
              <div className="city">Вологда</div>
            </div>
            <div className="point novgorod">
              <div className="city">Нижний Новгород</div>
            </div>
            <div className="point tula">
              <div className="city">Тула</div>
            </div>
            <div className="point arkhangelsk">
              <div className="city">Архангельск</div>
            </div>
          </div>
        </div>
      </section>
      <Partners />
    </>
  );
};
