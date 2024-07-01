import './NotFoundPage.scss';
import { Button } from '../../components/Button/Button';
import { NavigationLink } from '../../components/NavigationLink/NavigationLink';
import background from './background.svg';

export const NotFoundPage = () => {
  return (
    <section id="not-found">
      <img src={background} alt="" />
      <div className="content">
        <nav>
          <NavigationLink name={'Каталог Авто'} url={'catalog'} />
          <NavigationLink name={'Trade-In'} url={'tradein'} />
          <NavigationLink name={'Экспресс кредит'} url={'techcenter'} />
          <NavigationLink name={'Контакты'} url={'contact'} />
        </nav>
        <h1>Страница не найдена!</h1>
        <p>
          «Мы запустили новый сайт, сделав его удобным и информативным.
          <br />
          Возможно, запрашиваемая Вами страница была перенесена или удалена.
          <br />
          Вы можете позвонить нам и получить квалифицированную помощь наших специалистов»
        </p>
        <Button text="На Главную" />
      </div>
    </section>
  );
};
