import { TicTacToeValues } from "../Square";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GameProps {}

export interface GameHistory {
  squares: ReadonlyArray<TicTacToeValues | null>
}
