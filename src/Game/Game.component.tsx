import { useEffect, useState } from 'react';
import { Board } from '../Board';
import { TicTacToeValues } from '../Square';
import './Game.css';
import { GameHistory } from './Game.model';

export function Game(): JSX.Element {
  const [history, setHistory] = useState<ReadonlyArray<GameHistory>>(
    [
      {
        squares: Array(9).fill(null),
        nextValue: TicTacToeValues.X,
      }
    ]
  );
  const [currentHistory, setCurrentHistory] = useState<GameHistory>(history[0]);
  const [nextValue, setNextValue] = useState<TicTacToeValues>(TicTacToeValues.X);
  const [winner, setWinner] = useState<TicTacToeValues | null>(null);
  const [status, setStatus] = useState('');
  const [moves, setMoves] = useState<ReadonlyArray<JSX.Element>>([]);

  function onSquareClick(value: number){
    if (winner !== null || currentHistory.squares[value]) {
      setWinner(winner);
      return;
    }

    setHistory([
      ...history,
      {
        squares: currentHistory.squares.map((square, index) => {
          if (index === value) {
            return nextValue;
          }
          return square;
        }),
        nextValue,
      }
    ]);

    setMoves(
      history.map(
        (step, move) => {
          console.log(move);
          const description = move ? `Go to move #${move}` : 'Go to game state';

          return (
            <li>
              <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
          )
        }
      )
    );

    if (nextValue === TicTacToeValues.X) {
      setNextValue(TicTacToeValues.O);
    } else {
      setNextValue(TicTacToeValues.X);
    }
  }

  function jumpTo(index: number) {
    setCurrentHistory(history[index]);
    setMoves(
      moves.filter(
        (move, moveIndex) => {
          return (moveIndex <= index);
        }
      )
    )
    setHistory(
      history.filter(
        (historyMove, historyIndex) => {
          return (historyIndex <= index);
        }
      )
    )
    setNextValue(history[index].nextValue === TicTacToeValues.X ? TicTacToeValues.O : TicTacToeValues.X);
  }

  useEffect(
    () => {
      setCurrentHistory(history[history.length - 1]);
    },
    [history]
  )

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
      setWinner(calculateWinner(currentHistory.squares));

      if (winner) {
        setStatus(`Winner: ${winner}`);
      } else {
        setStatus(`Next player: ${nextValue}`);
      }
    },
    [winner, nextValue, currentHistory]
  );

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={currentHistory.squares}
          nextValue={nextValue}
          onSquareClick={onSquareClick}
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
