import React from 'react';
import Square from './Square';

const winlines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      isHumanMove: true,
      isWinner: false,
      Winner: '',
    };
  }

  handleClick = (ev) => {
    const board = this.state.board.slice();
    // human turn
    const squareVal = this.state.isHumanMove && 2;
    let index = ev.currentTarget.value;
    board[index] = squareVal;

    // computer turn
    const indexOfAll = (arr, val) =>
      arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);
    let zeroIndexes = indexOfAll(board, 0);

    index = zeroIndexes[Math.floor(Math.random() * zeroIndexes.length)];
    board[index] = 1;

    this.setState({
      board: board,
    });

    let computer = 1;
    let human = 2;

    let Winner = '';

    function seachZero(index) {
      return index == 0;
    }

    winlines.map(function (item, i) {
      if ((board[item[0]] & board[item[1]] & board[item[2]]) == human) {
        Winner = 'Human';
      } else if (
        (board[item[0]] & board[item[1]] & board[item[2]]) ==
        computer
      ) {
        Winner = 'Computer';
      }

      if (board.find(seachZero) === undefined) {
        Winner = 'Draw';
      }
    });

    if (!Winner == '') {
      this.state.isWinner = true;
      this.state.Winner = Winner;
    }
  };

  render() {
    let computer = 1;
    let human = 2;
    let computerMove = 'O';
    let humanMove = 'X';

    let annouceWinner;

    if (!this.state.Winner == '') {
      annouceWinner = (
        <span>
          Game Over.{' '}
          {this.state.Winner.Winner == 'Draw'
            ? this.state.Winner.Winner
            : `${this.state.Winner} has won`}
          .
        </span>
      );
    }

    // game instructions
    let showRules = (
      <span>
        Game Instructions: Choose a cell numbered from 1 to 9 as below
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
        <p> {showRules}</p>
        <p>{annouceWinner}</p>

        <Square
          value="0"
          disabled={isDisabled(0) || this.state.isWinner}
          handleClick={this.handleClick}
          text={squareText(0)}
        />
        <Square
          value="1"
          disabled={isDisabled(1) || this.state.isWinner}
          handleClick={this.handleClick}
          text={squareText(1)}
        />
        <Square
          value="2"
          disabled={isDisabled(2) || this.state.isWinner}
          handleClick={this.handleClick}
          text={squareText(2)}
        />
        <br />
        <Square
          value="3"
          disabled={isDisabled(3) || this.state.isWinner}
          handleClick={this.handleClick}
          text={squareText(3)}
        />
        <Square
          value="4"
          disabled={isDisabled(4) || this.state.isWinner}
          handleClick={this.handleClick}
          text={squareText(4)}
        />
        <Square
          value="5"
          disabled={isDisabled(5) || this.state.isWinner}
          handleClick={this.handleClick}
          text={squareText(5)}
        />
        <br />
        <Square
          value="6"
          disabled={isDisabled(6) || this.state.isWinner}
          handleClick={this.handleClick}
          text={squareText(6)}
        />
        <Square
          value="7"
          disabled={isDisabled(7) || this.state.isWinner}
          handleClick={this.handleClick}
          text={squareText(7)}
        />
        <Square
          value="8"
          disabled={isDisabled(8) || this.state.isWinner}
          handleClick={this.handleClick}
          text={squareText(8)}
        />
      </div>
    );
  }
}
