import './ComparisonItem.scss';
import { Car } from '../../../models/car';
import { ReactComponent as Cross } from '../../../components/assets/cross.svg';
import { ReactComponent as Heart } from '../../../components/assets/comparisonHeart.svg';
import { RootState } from '../../../store/store';
import { checkInFavorites, toggleToFavorites } from '../../FavoritesPage/favoritesPageSlice';
import { toggleToComparison } from '../comparisonPageSlice';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';

interface ComparisonItemProps {
  car: Car;
}

export const ComparisonItem = (props: ComparisonItemProps) => {
  const dispatch = useDispatch();
  const inFavorites = useSelector((state: RootState) => checkInFavorites(state, props.car.id));
  return (
    <div className="comparison-item">
      <div className="main-info">
        <div className="info-header">
          <h2>{props.car.type}</h2>
          <div className="top-pic">
            <button onClick={() => dispatch(toggleToFavorites(props.car))}>
              <Heart className={inFavorites ? 'in-favorites' : ''} />
            </button>
            <button onClick={() => dispatch(toggleToComparison(props.car))}>
              <Cross />
            </button>
          </div>
        </div>
        <img src={props.car.photo} alt="" className="car-img" />
      </div>
      <p className="car-info">{props.car.price}</p>
      <p className="car-info">{props.car.credit}</p>
      <p className="car-info">{props.car.condition}</p>
      <p className="car-info">{props.car.gasStation}</p>
      <p className="car-info">123</p>
      <p className="car-info">123</p>
      <p className="car-info">123</p>
      <p className="car-info">123</p>
      <p className="car-info">13</p>
      <p className="car-info">123</p>
      <p className="car-info">123</p>
      <p className="car-info">1</p>
    </div>
  );
};
