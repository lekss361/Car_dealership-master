import './ComparisonPage.scss';
import { ComparisonItem } from './components/ComparisonItem';
import { Option, options } from '../../components/RadioButton/options';
import { RadioButtonContainer } from '../../components/RadioButton/RadioButtonContainer';
import { selectComparisonItems } from './comparisonPageSlice';
import { useSelector } from 'react-redux';
import { useState } from 'react';

export const ComparisonPage = () => {
  const [selectedType, setSelectedType] = useState<string>('NEW_CARS');
  const carsInComparison = useSelector(selectComparisonItems);
  // сделать route позже отдельным компонентом breadcrumbs
  return (
    <section id="comparison">
      <div className="route">Главная {'>'} Сравнение</div>
      <div className="controls">
        <h1>Сравнение</h1>
        <RadioButtonContainer onSelectedChange={setSelectedType} cars={carsInComparison} options={options} />
      </div>
      <div className="horizontal-line"></div>
      <div className="comparison-table">
        <div className="comparison-legend">
          <div className="comparison-legend-item">
            <p>Автомобили</p>
            <input type="checkbox"></input>
            <label htmlFor="checkbox">Показать различия</label>
          </div>
          <p className="comparison-legend-item">Стоимость</p>
          <p className="comparison-legend-item">Стоимость со скидкой</p>
          <p className="comparison-legend-item">Состояние</p>
          <p className="comparison-legend-item">Регион</p>
          <p className="comparison-legend-item">Марка</p>
          <p className="comparison-legend-item">Модель</p>
          <p className="comparison-legend-item">Модификация</p>
          <p className="comparison-legend-item">Тип двигателя</p>
          <p className="comparison-legend-item">КПП</p>
          <p className="comparison-legend-item">Тип кузова</p>
          <p className="comparison-legend-item">Кол-во дверей</p>
          <p className="comparison-legend-item">Кол-во дверей</p>
        </div>
        <div className="comparison-items-container">
          {carsInComparison.map((item) =>
            selectedType === item.condition ? <ComparisonItem key={`item-${item.id}`} car={item}></ComparisonItem> : <></>,
          )}
        </div>
      </div>
    </section>
  );
};
