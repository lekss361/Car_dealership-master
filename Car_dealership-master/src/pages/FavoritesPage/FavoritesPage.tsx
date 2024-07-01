import './FavoritesPage.scss';
import { IndividualCarContainer } from '../../components/IndividualCarContainer/IndividualCarContainer';
import { LoginPage } from '../LoginPage/LoginPage';
import { RadioButtonContainer } from '../../components/RadioButton/RadioButtonContainer';
import { isAuthenticated } from '../LoginPage/currentUserSlice';
import { options } from '../../components/RadioButton/options';
import { selectFavoritesItems, selectFavoritesItemsCount } from './favoritesPageSlice';
import { useSelector } from 'react-redux';
import { useState } from 'react';

export const FavoritesPage = () => {
  const [selectedType, setSelectedType] = useState<string>('NEW_CARS');
  const [showModal, setShowModal] = useState(true);
  const isAuth = useSelector(isAuthenticated);
  const carsList = useSelector(selectFavoritesItems);
  const count = useSelector(selectFavoritesItemsCount);
  const selectedCars = carsList.filter((car) => car.condition === selectedType);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      {showModal && !isAuth && <LoginPage onClose={toggleModal} />}
      <section id="favorites" className={!isAuth ? 'modal' : ''}>
        <div className="route">Главная {'>'} Избранное</div>
        <div className="header-part">
          <div className="controls">
            <h1>Избранное</h1>
            <RadioButtonContainer onSelectedChange={setSelectedType} cars={carsList} options={options} />
          </div>
          <p>
            В избранном <strong>{count} авто</strong>
          </p>
        </div>
        <div className="horizontal-line"></div>
        <h2>{selectedType === 'NEW_CARS' ? 'Новые авто' : selectedType === 'OLD_CARS' ? 'С пробегом' : 'Такси'}</h2>
        <div className="cars-container">
          {selectedCars.length === 0 ? (
            <div>
              <p className="no-cars-notification">Вы еще не выбрали не одной машины из данной категории, самое время добавить парочку в избранное!</p>
            </div>
          ) : (
            <>
              {selectedCars.map((item) => (
                <IndividualCarContainer key={`carAvailable -${item.id}`} item={item} />
              ))}
            </>
          )}
        </div>
      </section>
    </>
  );
};
