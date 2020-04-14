import React from 'react';

export default function Square(props) {
  let subclass;
  const { value, handleClick, text, isGameover } = props;
  text.props.children == 'X' && (subclass = 'human');
  text.props.children == 'O' && (subclass = 'computer');
  let classname = `square square--${subclass}`;

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
