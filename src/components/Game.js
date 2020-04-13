import React from 'react';
import Square from './Square';
// import Margutis from '../images/margutis.jpg';

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
    //  function to loop throug array and  search all indexes or search word
    const indexOfAll = (arr, val) =>
      arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);
    // look for zero's indexes in board array
    let zeroIndexes = indexOfAll(board, 0);
    // declare random available zero index
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
      this.state.isGameover = true;
      this.state.Winner = Winner;
    }
  };

  render() {
    let computer = 1;
    let human = 2;
    let computerMove = 'O';
    let humanMove = 'X';
    const board = this.state.board.slice();

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

    let handleClick = this.handleClick;
    let isGameover = this.state.isGameover;
    let isDisabled = (index) => !this.state.board[index] == 0;
    let gameboard = board.map(function (item, i) {
      let breakline = false;
      // add break line after every 3 buttons
      (i + 1) % 3 == 0 && (breakline = true);
      let test1 = 'test123';
      let test = `square square--${test1}`;
      return (
        <Square
          key={i}
          value={i}
          classname={test}
          disabled={isDisabled(i) || isGameover}
          handleClick={handleClick}
          text={squareText(i)}
          addbreakline={breakline}
        />
      );
    });
    return (
      <div>
        <h1>Diki Daki Du</h1>
        {/* <img className="square" src={Margutis} /> */}
        <p> {showRules}</p>
        <p>{annouceWinner}</p>
        {gameboard}
        <br />
      </div>
    );
  }
}
