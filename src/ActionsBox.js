import React from 'react';

function ActionButton(props) {
  return (
    <div className="action-btn">
      <button onClick={props.onClick}>{props.text}</button>
    </div>
  );
}

function ActionsBox(props) {
  let btns = [];
  for (let i = 0; i < 3; i++) {
    btns.push(<ActionButton text={props.btnText[i]} onClick={() => props.handler(i)}/>);
  }
  return (
    <div className="actions-box">
      {btns}
    </div>
  );
}

export default ActionsBox;