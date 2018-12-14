import React from 'react';

function ActionButton(props) {
  return (
    <div className="action-btn">
      <button onClick={props.onClick}>{props.text}</button>
    </div>
  );
}

function ActionsBox(props) {
  return (
    <div className="actions-box">
      {[0, 1, 2].map(
        i => <ActionButton text={props.btnText[i]}
                           onClick={() => props.handler(i)}
                           key={i.toString()}/>
      )}
    </div>
  );
}

export default ActionsBox;