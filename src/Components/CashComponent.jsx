import React from 'react';
import './CashComponent.css';

const CashComponent = ({ label }) => {
  const handleClick = () => {
    alert(`You clicked ${label}`);
  };

  return (
    <button className="buttoncash" onClick={handleClick}>
      {label}
    </button>
  );
};

export default CashComponent;