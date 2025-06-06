import React from 'react';
import './ClearComponent.css';

const ClearComponent = ({ label }) => {
  const handleClick = () => {
    alert(`You clicked ${label}`);
  };

  return (
    <button className="buttonclear" onClick={handleClick}>
      {label}
    </button>
  );
};

export default ClearComponent;