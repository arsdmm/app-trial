import React from 'react';
import './CashComponent.css';

const CashComponent = ({ amount, onClick }) => {
  return (
    <button onClick={() => onClick(amount)} className="buttoncash">
      Cash
    </button>
  );
};

export default CashComponent;