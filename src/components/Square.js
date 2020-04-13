import React from 'react';

export default function Square(props) {
  let subclass;
  let disabled = false;
  props.text.props.children == 'X' && (subclass = 'human') & (disabled = true);
  props.text.props.children == 'O' &&
    (subclass = 'computer') & (disabled = true);
  let classname = `square square--${subclass}`;
  // let newGame = props.newGame;
  return (
    <span>
      <button
        className={classname}
        disabled={disabled || props.isGameover}
        value={props.value}
        onClick={props.handleClick}
      />
      {props.addbreakline && <br />}
    </span>
  );
}
