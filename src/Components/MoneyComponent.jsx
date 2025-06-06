import React from 'react';
import './MoneyComponent.css';

const MoneyComponent = ({ amount, onClick }) => {
  return (
    <button className="buttonmoney" onClick={() => onClick(amount)}>
      ${amount}
    </button>
  );
};

export default MoneyComponent;
