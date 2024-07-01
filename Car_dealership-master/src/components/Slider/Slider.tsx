import './Slider.scss';
import React, { useState } from 'react';
import ReactSlider from 'react-slider';

interface SliderProps {
  maxValue: number;
}

export const Slider = (props: SliderProps) => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(props.maxValue);
  const max = props.maxValue;
  const spans: number[] = [];
  for (let i = 0; i < 11; i++) {
    spans.push(Math.round(max * i * 0.1));
  }

  const setValues = (value: number[]) => {
    setMinValue(value[0]);
    setMaxValue(value[1]);
  };

  return (
    <>
      <div className="slider-block">
        <div className="value-block">
          <div className="name">Цена</div>
          <div className="range">
            {minValue} - {maxValue}
          </div>
        </div>
        <ReactSlider
          className="slider"
          defaultValue={[minValue, maxValue]}
          max={props.maxValue}
          onChange={(value, index) => setValues(value)}
          pearling
          marks={[...spans]}
          renderMark={(props) => <span {...props}>{props.value}</span>}
          minDistance={10}
        />
      </div>
    </>
  );
};
