import React from 'react';
import './Square.css';
import { SquareProps } from './Square.model';

export function Square(props: SquareProps) {
  return (
    <button
      className="square"
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}
