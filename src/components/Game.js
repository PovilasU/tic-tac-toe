import React from 'react';
import Square from './Square';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      isX: true,
    };
  }

  handleClick = (ev) => {
    const board = this.state.board.slice();
    const squareVal = this.state.isX ? 1 : 2;
    const index = ev.currentTarget.value;
    board[index] = squareVal;

    this.setState({
      board: board,
      isX: !this.state.isX,
    });
  };

  render() {
    let squareText = (index) => {
      return (
        <span>
          {(this.state.board[index] == 1 && 'X') ||
            (this.state.board[index] == 2 && 'O')}
        </span>
      );
    };

    let isDisabled = (index) => !this.state.board[index] == 0;
    return (
      <div>
        <h1>Diki Daki Du</h1>
        <Square
          value="0"
          disabled={isDisabled(0)}
          handleClick={this.handleClick}
          text={squareText(0)}
        />
        <Square
          value="1"
          disabled={isDisabled(1)}
          handleClick={this.handleClick}
          text={squareText(1)}
        />

        <br />
      </div>
    );
  }
}
