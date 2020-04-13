import React from 'react';

export default function Square(props) {
  return (
    <span>
      <button
        className="square square--computer"
        disabled={props.disabled}
        value={props.value}
        onClick={props.handleClick}
      >
        &nbsp;
        {props.text}
      </button>
      {props.addbreakline && <br />}
    </span>
  );
}
