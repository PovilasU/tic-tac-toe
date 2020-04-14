import React from 'react';
import Square from './Square';
import Button from '@material-ui/core/Button';

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
      newGame: false,
      isGameover: false,
    };
  }

  newGame = () => {
    this.setState({
      board: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      isGameover: false,
    });
  };

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

    winlines.map(function (item) {
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
          Game Over.
          {this.state.Winner == 'Draw'
            ? this.state.Winner
            : `${this.state.Winner} has won`}
          .
        </span>
      );
    }
    // if sum of array elements equals zero then it is new game
    this.state.board.reduce(function (a, b) {
      return a + b;
    }, 0) == 0 && (annouceWinner = '');
    // game instructions
    let showRules = (
      <span>
        <span>
          Game Instructions: Choose a cell numbered from 1 to 9 as below
        </span>
        <span className="flex-container">1 | 2 | 3</span>
        <span className="flex-container">4 | 5 | 6</span>
        <span className="flex-container">7 | 8 | 9</span>
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

    let gameboard = board.map(function (item, i) {
      let breakline = false;
      // add break line after every 3 buttons
      (i + 1) % 3 == 0 && (breakline = true);

      return (
        <Square
          key={i}
          value={i}
          isGameover={isGameover}
          handleClick={handleClick}
          text={squareText(i)}
          addbreakline={breakline}
        />
      );
    });
    return (
      <div className="container">
        <div className="flex-container">
          <h1>Diki Daki Du</h1>
        </div>
        <div className="flex-container">
          <p> {showRules}</p>
        </div>

        <div className="flex-container">
          <Button
            variant="outlined"
            color="default"
            onClick={this.newGame}
            aria-label="Center Align"
          >
            New Game
          </Button>
        </div>
        <div className="flex-container">
          <p>{annouceWinner}</p>
        </div>

        <div className="flex-container">
          <div>{gameboard}</div>
        </div>

        <div className="flex-container">
          <p>
            <a href="https://github.com/PovilasU/tic-tac-toe">
              Link to source code (Github)
            </a>
          </p>
        </div>
        <div className="flex-container">
          <p>
            <a href="https://www.linkedin.com/in/povilas-urbonas-0a6a53a4/">
              LinkedIn
            </a>
          </p>
        </div>
        <div className="flex-container">
          <div className="flex-column">
            <h2>About</h2>
            <p> This is my implementation of game `Tic-Tac-Toe`</p>
            <p>
              For this project I used Webpack, React.js, states,SCSS , CSS
              Flexbox, MaterialUI, Hosted on AWS Amplify.
            </p>
            <p>
              Game has Easter theme because I developed this game during Easter
              weekend
            </p>
            <p>2020</p>
          </div>
        </div>
      </div>
    );
  }
}
