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
        <Square
          value="2"
          disabled={isDisabled(2)}
          handleClick={this.handleClick}
          text={squareText(2)}
        />
        <br />
        <Square
          value="3"
          disabled={isDisabled(3)}
          handleClick={this.handleClick}
          text={squareText(3)}
        />
        <Square
          value="4"
          disabled={isDisabled(4)}
          handleClick={this.handleClick}
          text={squareText(4)}
        />
        <Square
          value="5"
          disabled={isDisabled(5)}
          handleClick={this.handleClick}
          text={squareText(5)}
        />
        <br />
        <Square
          value="6"
          disabled={isDisabled(6)}
          handleClick={this.handleClick}
          text={squareText(6)}
        />
        <Square
          value="7"
          disabled={isDisabled(7)}
          handleClick={this.handleClick}
          text={squareText(7)}
        />
        <Square
          value="8"
          disabled={isDisabled(8)}
          handleClick={this.handleClick}
          text={squareText(8)}
        />
      </div>
    );
  }
}
