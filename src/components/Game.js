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
    return (
      <div>
        <h1>Tic tac toe</h1>
        <Square
          value="0"
          disabled={!this.state.board[0] == 0}
          handleClick={this.handleClick}
          text={squareText(0)}
        />
        <Square
          value="1"
          disabled={!this.state.board[1] == 0}
          handleClick={this.handleClick}
          text={squareText(1)}
        />

        <br />
      </div>
    );
  }
}

// {
//   this.state.board.map(function (item, i) {
//     //   console.log('test');
//     return (
//       <button value={i}>
//         {i} {item}
//       </button>
//     );
//   });
// }
