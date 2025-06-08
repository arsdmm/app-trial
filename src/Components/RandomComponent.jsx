import React from 'react';
import './RandomComponent.css';

function RandomComponent({ label, onClick }) {
  return (
    <button className="buttonrandom" onClick={onClick}>
      {label}
    </button>
  );
}

export default RandomComponent;