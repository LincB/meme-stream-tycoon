import React from 'react';

function ThreadsBox(props) {
  return (
        <div className="threads-box">
        {props.fires.map(
            (value, index) => <div className="side-alert" onClick={() => props.handler(index)} key={value.name}>
              <span key={value.name}>
                <h4>{value.name}</h4>
                <img src="http://www.stickpng.com/assets/images/58a1e021e33a543010fac278.png" height="40px"
                     align="right" alt = "fireboi"/>
                </span>
              </div>
        )}
      </div>
  );
}

export default ThreadsBox;