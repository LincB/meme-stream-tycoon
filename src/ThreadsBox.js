import React from 'react';

function ThreadsBox(props) {
  return (
      <div className="threads-box">
        {props.fireStack.map(
            (value, index) => <div className="side-alert" onClick={() => props.handler(index)}>
              <span>
                  <h4>{props.fireStack[index]}</h4>
                  <img src="http://www.stickpng.com/assets/images/58a1e021e33a543010fac278.png" height="40px"
                       align="right"/>
              </span>
            </div>
        )}
      </div>
  );
}

export default ThreadsBox;