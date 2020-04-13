import React from 'react';

export default function Square(props) {
  let subclass;
  props.text.props.children == 'X' && (subclass = 'human');
  props.text.props.children == 'O' && (subclass = 'computer');
  let classname = `square square--${subclass}`;

  return (
    <span>
      <button
        className={classname}
        disabled={props.disabled}
        value={props.value}
        onClick={props.handleClick}
      />
      {props.addbreakline && <br />}
    </span>
  );
}
