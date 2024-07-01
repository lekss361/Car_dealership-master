import { Car } from '../../models/car';
import { Option, options } from './options';
import { RadioButton } from './RadioButton';
import React, { useState } from 'react';

interface RadioButtonContainerProps {
  onSelectedChange: (value: string) => void;
  cars?: Car[];
  options: Option[];
}

export const RadioButtonContainer = (props: RadioButtonContainerProps) => {
  const [selectedType, setSelectedType] = useState<string>('NEW_CARS');
  const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedType(value);
    props.onSelectedChange(value);
  };
  return (
    <div className="radiobutton-container">
      {props.options.map((item) => (
        <RadioButton
          name="car-type"
          value={item.value}
          id={'type-' + item.id}
          onChange={radioHandler}
          checked={selectedType === item.value}
          label={item.label}
          key={'key-' + item.id}
          count={props.cars ? props.cars.filter((car) => car.condition === item.value).length : 0}
        />
      ))}
    </div>
  );
};
