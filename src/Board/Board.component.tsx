import React, { useCallback, useEffect, useState } from 'react';
import { Square, TicTacToeValues } from '../Square';
import './Board.css';
import { BoardProps } from './Board.model';

export function Board(props: BoardProps) {
  const [squares, setSquares] = useState<ReadonlyArray<TicTacToeValues | null>>(Array(9).fill(null));
  const [nextValue, setNextValue] = useState<TicTacToeValues>(TicTacToeValues.X);
  const [winner, setWinner] = useState<TicTacToeValues | null>(null);
  const [status, setStatus] = useState('');

  const clickSquare = useCallback(
    (value: number) => {
      if (winner !== null || squares[value]) {
        setWinner(winner);
        return;
      }
      setSquares(
        squares.map((square, index) => {
          if (index === value) {
            return nextValue;
          }
          return square;
        })
      );

      if (nextValue === TicTacToeValues.X) {
        setNextValue(TicTacToeValues.O);
      } else {
        setNextValue(TicTacToeValues.X);
      }
    },
    [squares, nextValue, winner]
  );

  function renderSquare(value: number) {
    return <Square
      value={squares[value]}
      key={value}
      onClick={() => clickSquare(value)}
    />;
  }

  function calculateWinner(squares: ReadonlyArray<TicTacToeValues | null>) {
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
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  useEffect(
    () => {
      setWinner(calculateWinner(squares));

      if (winner) {
        setStatus(`Winner: ${winner}`);
      } else {
        setStatus(`Next player: ${nextValue}`);
      }
    },
    [winner, nextValue, squares]
  );

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}
