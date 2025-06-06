import React from 'react';
import './RandomComponent.css';

const RandomComponent = ({ label }) => {
  const handleClick = () => {
    alert(`You clicked ${label}`);
  };

  return (
    <button className="buttonrandom" onClick={handleClick}>
      {label}
    </button>
  );
};

export default RandomComponent;