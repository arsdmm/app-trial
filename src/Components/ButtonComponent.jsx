import React from 'react';
import './ButtonComponent.css';

const ButtonComponent = ({ number, onClick, isSelected }) => {
  return (
    <button
      className={`button ${isSelected ? 'selected' : ''}`} // If isSelected is true, add 'selected' class
      onClick={() => onClick(number)}
    >
      {number}
    </button>
  );
};

export default ButtonComponent;
