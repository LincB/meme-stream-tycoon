import React, { Component } from 'react';

class StoryBox extends Component {
  render() {
    return (
      <div className="story-box-wrapper">
        <div className="story-box">{this.props.contents}</div>
      </div>
    )
  }

  componentDidUpdate() {

  }
}

export default StoryBox;