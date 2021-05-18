import React from 'react';
import './Square.css';
import { SquareProps, SquareState } from './Square.model';

export class Square extends React.Component<SquareProps, SquareState> {
  constructor(props: SquareProps) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <button
        className="square"
        onClick={this.handleClick.bind(this)}
      >
        {this.state.value}
      </button>
    );
  }

  handleClick() {
    this.setState({value: this.props.value});
  }
}
