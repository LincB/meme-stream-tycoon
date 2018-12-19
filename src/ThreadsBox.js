import React from 'react';

function ThreadsBox(props) {
  return (
        <div className="threads-box">
        {props.fires.map(
            (value, index) => {
              let className = "side-alert";
              if (value === props.currentFire) className += " current-fire";
              return (<div className={className} onClick={() => props.handler(index)} key={value.name}>
              <span key={value.name}>
                <h4>{value.name}</h4>
                <img src={value.image} height="40px"
                     align="right" alt="fireboi"/>
                </span>
              </div>);
            }
        )}
      </div>
  );
}

export default ThreadsBox;