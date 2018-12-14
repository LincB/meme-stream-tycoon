import React from 'react';

function ThreadPopup(props) {
  return (
    <div className="thread-popup" style={props.visible ? {} : {'display': 'none'}}>
      {props.popupText}
    </div>
  )
}

export default ThreadPopup;
