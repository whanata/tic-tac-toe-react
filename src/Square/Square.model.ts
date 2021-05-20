export interface SquareProps {
  value: TicTacToeValues | null,
  onClick(): unknown,
}

export enum TicTacToeValues {
  X = 'X',
  O = 'O',
}
