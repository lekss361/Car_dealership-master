import './Brand.scss';
import React from 'react';

interface Model {
  name: string;
  icon: string;
}

export const Brand = (props: Model) => {
  return (
    <div className="brand">
      <img className="brand-icon" src={props.icon} alt={props.name} />
      <a href="/" className="name">
        {props.name}
      </a>
    </div>
  );
};
