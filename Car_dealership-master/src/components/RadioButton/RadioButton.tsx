import './RadioButton.scss';
import React, { EventHandler } from 'react';

interface RadioButtonProps {
  name: string;
  id: string;
  value: string;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  count: number;
}

export const RadioButton = (props: RadioButtonProps) => {
  return (
    <div className="radiobutton">
      <label className="radiobutton-label">
        <input type="radio" name={props.name} value={props.value} onChange={props.onChange} className="radiobutton-input" checked={props.checked} />
        <span className="custom-radiobutton">
          {props.label} <span className="accent">{props.count ? props.count : ''}</span>
        </span>
      </label>
    </div>
  );
};
