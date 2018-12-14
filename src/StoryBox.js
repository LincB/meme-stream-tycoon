import React, { Component } from 'react';

class StoryBox extends Component {
  render() {
    return (
      <div className="story-box-wrapper">
        <textarea className="story-box" readOnly/>
      </div>
    )
  }
}

export default StoryBox;