import React from 'react';
const classNames = require('classnames');

export default function Square(props) {
  const { value, handleClick, text, isGameover } = props;
  let btnClass = classNames('square', {
    'square--human': text.props.children == 'X',
    'square--computer': text.props.children == 'O',
  });

  return (
    <span>
      <button
        className={btnClass}
        disabled={text.props.children || isGameover}
        value={value}
        onClick={handleClick}
        aria-label="Center Align"
      />
      {props.addbreakline && <br />}
    </span>
  );
}
