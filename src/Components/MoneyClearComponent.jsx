import React from 'react';
import './MoneyClearComponent.css';

const MoneyClearComponent = ({ onClick }) => {
  return (
    <button className="buttonmoneyclear" onClick={onClick}>
      Clear Money
    </button>
  );
};

export default MoneyClearComponent;