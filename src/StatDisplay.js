import React from 'react';

function StatDisplay(props) {
  return (
    <div class="stat-display">
        <div class="stat-child">
          <h4 class="stat-label">{props.label}</h4>
          <span class="stat-value">{props.value}</span>
        </div>
    </div>
  )
}

export default StatDisplay;
