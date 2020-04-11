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
    let computer = 1;
    let human = 2;
    // computer will move with 'O'
    // human will move with 'X'
    let computerMove = 'O';
    let humanMove = 'X';

    //   game rules
    let showRules = (
      <span>
        Choose a cell numbered from 1 to 9 as below
        <br /> 1 | 2 | 3
        <br />
        4 | 5 | 6
        <br />7 | 8 | 9
      </span>
    );

    let squareText = (index) => {
      return (
        <span>
          {(this.state.board[index] == computer && computerMove) ||
            (this.state.board[index] == human && humanMove)}
        </span>
      );
    };

    let isDisabled = (index) => !this.state.board[index] == 0;
    return (
      <div>
        <h1>Diki Daki Du</h1>

        <p>Game Instructions: {showRules}</p>
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
