import React from 'react';
import './Square.css'; // Crea este archivo después

const Square = ({ value, onClick }) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
