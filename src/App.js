import React, { Component } from 'react';
import './App.css';
import StatsBox from './StatsBox';
import ThreadsBox from './ThreadsBox';
import ActionsBox from './ActionsBox';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actionsText: ["a", "b", "c"],
    };
  }

  handleClick(i) {
    alert(i);
  }

  render() {
    return (
      <div className="app">
        <div className="main-grid">
          <StatsBox/>
          <ThreadsBox/>
          <ActionsBox btnText={this.state.actionsText} handler={i => this.handleClick(i)}/>
        </div>
      </div>
    );

  }
}

export default App;
