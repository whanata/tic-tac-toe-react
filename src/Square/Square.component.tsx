import './Square.css';
import { SquareProps } from './Square.model';

export function Square(props: SquareProps): JSX.Element {
  return (
    <button
      className="square"
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}
