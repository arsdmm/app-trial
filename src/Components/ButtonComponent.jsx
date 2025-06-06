import React from 'react';
import './ButtonComponent.css';

const ButtonComponent = ({ number }) => {
  const handleClick = () => {
    alert(`You clicked button number ${number}`);
  };

  return (
    <button className="button" onClick={handleClick}>
      {number}
    </button>
  );
};

export default ButtonComponent;