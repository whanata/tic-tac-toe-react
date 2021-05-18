export interface SquareProps {
  value: TicTacToeValues,
};

export interface SquareState {
  value?: TicTacToeValues;
}

export enum TicTacToeValues {
  X = 'X',
  Y = 'Y',
}
