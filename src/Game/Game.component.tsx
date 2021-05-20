import React from 'react';
import { Board } from '../Board';
import './Game.css';
import { GameProps } from './Game.model';

export function Game(props: GameProps) {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}
