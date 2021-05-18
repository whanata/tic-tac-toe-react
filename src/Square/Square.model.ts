export interface SquareProps {
  value: TicTacToeValues | null,
  onClick(): any,
};

export enum TicTacToeValues {
  X = 'X',
  O = 'O',
}
