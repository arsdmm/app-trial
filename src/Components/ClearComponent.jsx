import React from 'react';
import './ClearComponent.css';

const ClearComponent = ({ onClick }) => {
  return (
    <button className="buttonclear" onClick={onClick} style={{ marginTop: '10px' }}>
      Clear
    </button>
  );
};

export default ClearComponent;