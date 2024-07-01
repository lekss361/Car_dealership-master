import './IndividualCarContainer.scss';
import { Car } from '../../models/car';
import { ReactComponent as Comparison } from '../../components/assets/comparison.svg';
import { ReactComponent as Heart } from '../../components/assets/heart.svg';
import { selectComparisonItems, toggleToComparison } from '../../pages/ComparisonPage/comparisonPageSlice';
import { selectFavoritesItems, toggleToFavorites } from '../../pages/FavoritesPage/favoritesPageSlice';
import { useDispatch, useSelector } from 'react-redux';
import blackButton from './assets/black-button.svg';
import fonCity from './assets/fon-city.png';
import gasStation from './assets/gas-station.png';
import greyButton from './assets/grey-button.svg';
import horsePower from './assets/horse-power.png';
import overclocking from './assets/overclocking.png';
import present from './assets/present.svg';
import redButton from './assets/red-button.svg';
import redButtonMob from './assets/RedButtonMob.png';
import redSpace from './assets/red-space.svg';
import speed from './assets/speed.png';
import useWindowDimensions from '../../hooks/useWindowDimensions';

interface IndividualCarItem {
  item: Car;
}
export const IndividualCarContainer = (car: IndividualCarItem) => {
  const { height, width } = useWindowDimensions();
  let isComputer = width > 850;

  const dispatch = useDispatch();
  const myArray: string[] = car.item.gifts;
  const inFavorites = useSelector(selectFavoritesItems).find((item) => item.id === car.item.id);
  const inComparison = useSelector(selectComparisonItems).find((item) => item.id === car.item.id);
  return (
    <div className="individual-car-container">
      <div className="top-block">
        <img id="background" src={fonCity} alt="background" />
        <img id="car" src={car.item.photo} alt="carSpecial" />
        <div className="name">
          {car.item.type} <p className="name">{car.item.model}</p>
        </div>
        <div className="top-pic">
          <button onClick={() => dispatch(toggleToFavorites(car.item))}>
            <Heart className={inFavorites ? 'in-favorites' : ''} />
          </button>
          <button onClick={() => dispatch(toggleToComparison(car.item))}>
            <Comparison className={inComparison ? 'in-favorites' : ''} />
          </button>
        </div>
      </div>
      <div id="benefit">
        <img src={redSpace} alt="redSpace" />
        <p id="day-sale">Предложение дня</p>
        <div>
          <p>Выгода</p>
          <p>{car.item.profit}</p>
        </div>
      </div>

      <div className="information-discount">
        {myArray.map((element: string, index: number) => (
          <>
            <img src={present} alt="present" />
            <div className="style" key={`element-${index}`}>
              {element}
              <p className="style gift">в подарок</p>
            </div>
          </>
        ))}
      </div>
      <div className="price">
        <p className="grid-a">{car.item.price}</p>
        <p className="grid-b">
          Кредит <b>{car.item.credit}</b>
        </p>
        <img className="grid-c" src={horsePower} alt="horsePower" />
        <img className="grid-d" src={gasStation} alt="gasStation" />
        <img className="grid-e" src={speed} alt="speed" />
        <img className="grid-f" src={overclocking} alt="overclocking" />
      </div>
      <div className="pos">
        <p>{car.item.horsePower} л.с</p>
        <p>{car.item.gasStation} л/км</p>
        <p>{car.item.speed} км/ч</p>
        <p>{car.item.overclocking} c.</p>
      </div>
      <div className="buttons">
        <img className="red-b" src={isComputer ? redButton : redButtonMob} alt="redButton" />
        <img className="black-b" src={blackButton} alt="blackButton" />
        <img className="grey-b" src={greyButton} alt="greyButton" />
        <div className="button-text">
          <button className="long">Резерв онлайн</button>
          <button className="short">Купить</button>
          <button className="short">Подробнее</button>
        </div>
      </div>
    </div>
  );
};
