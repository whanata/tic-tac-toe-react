import React from 'react';
import { Square, TicTacToeValues } from '../Square';
import './Board.css';
import { BoardProps, BoardState } from './Board.model';

export class Board extends React.Component<BoardProps, BoardState> {
  constructor(props: BoardProps) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      nextValue: TicTacToeValues.X,
      winner: null,
    }
  }

  renderSquare(value: number) {
    return <Square
      value={this.state.squares[value]}
      onClick={this.handleSquareClick.bind(this, value)}
    />;
  }

  render() {
    let status;

    const winner = this.calculateWinner(this.state.squares);

    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player: ${this.state.nextValue}`;
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }

  handleSquareClick(value: number) {
    const squares = this.state.squares.slice();
    const winner = this.calculateWinner(squares);
    if (winner !== null || squares[value]) {
      this.setState({...this.state, winner});
      return;
    }
    squares[value] = this.state.nextValue;
    if (this.state.nextValue === TicTacToeValues.X) {
      this.setState({squares, nextValue: TicTacToeValues.O});
    } else {
      this.setState({squares, nextValue: TicTacToeValues.X});
    }
  }

  calculateWinner(squares: ReadonlyArray<TicTacToeValues | null>) {
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
}
