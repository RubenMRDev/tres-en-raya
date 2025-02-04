import React from 'react';
import Square from './Square';
import './Board.css'; 

const Board = ({ squares, onSquareClick }) => {
  return (
    <div className="board">
      {squares.map((square, index) => (
        <Square
          key={index}
          value={square}
          onClick={() => onSquareClick(index)}
        />
      ))}
    </div>
  );
};

export default Board;
