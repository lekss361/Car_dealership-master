import './Footer.scss';
import { FooterInfo } from './components/FooterInfo';
import { FooterLink } from './components/FooterLink';
import { FooterTitle } from './components/FooterTitle';
import { NavigationLink } from '../NavigationLink/NavigationLink';
import { brandsLinks } from './brandsLinks';
import clock from '../assets/clock.svg';
import location from '../assets/location.svg';
import phone from '../assets/phone.svg';
import rating from '../assets/rating.png';
import useWindowDimensions from '../../hooks/useWindowDimensions';

export const Footer = () => {
  const { height, width } = useWindowDimensions();
  let isComputer = width > 850;

  return (
    <footer>
      <nav>
        <NavigationLink name={'Каталог авто'} url={'catalog'} />
        <NavigationLink name={'Авто с пробегом'} url={'catalog'} />
        <NavigationLink name={'Кредит и рассрочка'} url={'credit'} />
        <NavigationLink name={'Спецпредложения'} url={'specials'} />
        <NavigationLink name={'Такси в кредит'} url={'credit'} />
      </nav>
      <div className="horizontal-line"></div>
      <div className="footer-container">
        <div className="footer-block">
          <div className="block-head">
            <div className="block-head-left">
              <FooterTitle name="Каталог авто" />
              <FooterLink url="more" text="Подробнее" />
            </div>
            {isComputer ? <FooterLink url="map" text="Карта сайта" /> : null}
          </div>
          <div className="brands-container">
            {brandsLinks.map((item, index) => (
              <div className="brands-block" key={index}>
                {item.links.map((link) => (
                  <FooterLink url={'brand/' + link.toLowerCase()} text={link} key={link} />
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="footer-block">
          <FooterTitle name="Кредит и рассрочка" />
          <div className="credit-links">
            <FooterLink url="express-credit" text="Экспресс-кредит" />
            <FooterLink url="family-car" text="Семейный автомобиль" />
            <FooterLink url="first-car" text="Первый автомобиль" />
            <FooterLink url="medical-workers" text="Работникам медицины" />
            <FooterLink url="installment-plan" text="Рассрочка" />
            <FooterLink url="trade-in" text="Trade-in" />
          </div>
        </div>
        <div className="footer-block">
          <FooterTitle name="Контакты" />
          <FooterInfo src={phone} text="+7 (800) 551-94-31 +7 (495) 292-18-67" />
          <FooterInfo src={clock} text="Ежедневно с 08:00 до 21:00" />
          <FooterInfo src={location} text="Россия, Москва, 38КМ МКАД, 6Бс1" />
          <a href="scheme" className="scheme">
            Схема проезда
          </a>
        </div>
      </div>

      <div className="info">
        <div className="links-block">
          <p className="copyright">© 2021 Автосалон "ABC AUTO". Официальный дилер</p>
          <div className="links">
            <a href="/politics" className="politics">
              Политика конфиденциальности
            </a>
            <a href="/agreement" className="agreement">
              Пользовательское соглашение
            </a>
          </div>
        </div>
        <p className="text-block">
          Обращаем Ваше внимание на то, что данный интернет-сайт носит исключительно
          {isComputer ? <br /> : null}
          информационный характер и ни при каких условиях не является публичной офертой,
          {isComputer ? <br /> : null} определяемой положениями Статьи 437 Гражданского кодекса Российской Федерации.
        </p>
        <a href="yandex.ru" className="rating-block">
          <img src={rating} alt="" />
        </a>
      </div>
    </footer>
  );
};
