import React from 'react';
import { Square, TicTacToeValues } from '../Square';
import './Board.css';

export class Board extends React.Component {
  renderSquare(value: TicTacToeValues) {
    return <Square value={value} />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(TicTacToeValues.X)}
          {this.renderSquare(TicTacToeValues.X)}
          {this.renderSquare(TicTacToeValues.X)}
        </div>
        <div className="board-row">
          {this.renderSquare(TicTacToeValues.X)}
          {this.renderSquare(TicTacToeValues.X)}
          {this.renderSquare(TicTacToeValues.X)}
        </div>
        <div className="board-row">
          {this.renderSquare(TicTacToeValues.X)}
          {this.renderSquare(TicTacToeValues.X)}
          {this.renderSquare(TicTacToeValues.X)}
        </div>
      </div>
    );
  }
}
