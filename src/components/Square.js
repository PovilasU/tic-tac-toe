import React from 'react';

export default function Square(props) {
  // console.log(props.text.props.children);
  let subclass;
  const { value, handleClick, text, isGameover } = props;
  text.props.children == 'X' && (subclass = 'human');
  text.props.children == 'O' && (subclass = 'computer');
  let classname = `square square--${subclass}`;
  // let newGame = props.newGame;
  return (
    <span>
      <button
        className={classname}
        disabled={text.props.children || isGameover}
        value={value}
        onClick={handleClick}
        aria-label="Center Align"
      />
      {props.addbreakline && <br />}
    </span>
  );
}
