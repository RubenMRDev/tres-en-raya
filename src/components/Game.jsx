import React, { useState } from 'react';
import Board from './Board';

const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleSquareClick = (index) => {
    if (squares[index] || calculateWinner(squares)) return;

    const newSquares = squares.slice();
    newSquares[index] = isXNext ? 'X' : 'O';
    setSquares(newSquares);
    setIsXNext(!isXNext);
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let line of lines) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }

    return null;
  };

  const winner = calculateWinner(squares);
  const status = winner
    ? `Ganador/a: ${winner}`
    : `Siguiente jugador/a: ${isXNext ? 'X' : 'O'}`;

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <div>
      <h1 style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translate(-50%, -50%)'}}>Tres en Raya</h1>
      <p style={{ position: 'absolute', top: '27%', left: '50%', transform: 'translate(-50%, -50%)'}}>{status}</p>
      <Board squares={squares} onSquareClick={handleSquareClick} />
      <p style={{ position: 'absolute', top: '70%', left: '50%', transform: 'translate(-50%, -50%)'}}>
        <button onClick={resetGame}>Reiniciar</button>
      </p>
    </div>
  );
};

export default Game;
