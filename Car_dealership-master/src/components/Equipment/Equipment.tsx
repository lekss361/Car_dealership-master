import '../../index.scss';
import './Equipment.scss';
import React from 'react';

export interface EquipmentProps {
  title: string;
  vales: string[];
}

export const Equipment = (props: EquipmentProps) => {
  return (
    <>
      <div className="equipment-block" key={props.title}>
        <div className="title">{props.title}</div>
        <div className="equipment-list">
          {props.vales.map((value) => (
            <ul key={value}>
              <li>{value}</li>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
};
