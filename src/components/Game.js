import React from 'react';

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
    return (
      <div>
        <h1>Tic tac toe</h1>

        <button
          value="0"
          disabled={!this.state.board[0] == 0}
          onClick={this.handleClick}
        >
          {this.state.board[0] == 1 && 'X'} {this.state.board[0] == 2 && 'O'}
        </button>
        <button
          value="1"
          disabled={!this.state.board[1] == 0}
          onClick={this.handleClick}
        >
          {this.state.board[1] == 1 && 'X'} {this.state.board[1] == 2 && 'O'}
        </button>
        <button
          value="2"
          disabled={!this.state.board[2] == 0}
          onClick={this.handleClick}
        >
          {this.state.board[2] == 1 && 'X'} {this.state.board[2] == 2 && 'O'}
        </button>
      </div>
    );
  }
}
