import React from 'react';

export default function Square(props) {
  return (
    <button
      disabled={props.disabled}
      value={props.value}
      onClick={props.handleClick}
    >
      &nbsp;
      {props.text}
    </button>
  );
}
