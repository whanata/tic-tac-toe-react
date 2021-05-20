import { TicTacToeValues } from "../Square";

export interface BoardProps {
  squares: ReadonlyArray<TicTacToeValues | null>
  nextValue: TicTacToeValues
  onSquareClick(index: number): unknown
}
