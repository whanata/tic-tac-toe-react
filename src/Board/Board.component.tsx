import { Square } from '../Square';
import './Board.css';
import { BoardProps } from './Board.model';

export function Board(props: BoardProps): JSX.Element {
  function renderSquare(value: number) {
    return <Square
      value={props.squares[value]}
      onClick={() => props.onSquareClick(value)}
    />;
  }

  return (
    <div>
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
