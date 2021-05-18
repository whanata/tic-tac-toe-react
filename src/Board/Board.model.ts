import { TicTacToeValues } from "../Square";

export interface BoardProps {}

export interface BoardState {
  squares: ReadonlyArray<TicTacToeValues | null>
  nextValue: TicTacToeValues
  winner: TicTacToeValues | null
}
