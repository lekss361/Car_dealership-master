import './Dropdown.scss';
import React, { useState } from 'react';
import Select from 'react-select';
import arrow from './dropdownArrow.svg';

interface Option {
  name: string;
  value: string;
}

interface DropdownProps {
  name: string;
  options: Option[];
  isText?: boolean;
}

export const Dropdown = (props: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown}>
        {props.name}
        <img src={arrow} className={`dropdown-arrow ${isOpen ? 'open' : ''}`} alt="" />
      </button>
      {isOpen && (
        <ul className="dropdown-options">
          {props.options.map((option) => {
            if (!props.isText) {
              return (
                <li>
                  <a className="option-url" href={option.value} key={option.value}>
                    {option.name}
                  </a>
                </li>
              );
            }
            return (
              <li>
                <div className="option-name">{option.name}</div>
                <div className="option-value">{option.value}</div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
