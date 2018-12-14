import React, { Component } from 'react';
import './App.css';
import StatsBox from './StatsBox';
import ThreadsBox from './ThreadsBox';
import ActionsBox from './ActionsBox';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 0,
      users: 0,
      staff: 0,
      days: 0,
      actionsText: ["a", "b", "c"],
    };
  }

  handleClick(i) {
    alert(i);
  }

  static toDollars(amount) {
    return "$" + amount.toString().replace(/\d(?=(\d{3})+$)/g, '$&,');
  }

  render() {
    return (
      <div className="app">
        <div className="main-grid">
          <StatsBox
            balance={App.toDollars(this.state.balance)}
            users={this.state.users}
            staff={this.state.staff}
            days={this.state.days} />
          <ThreadsBox/>
          <ActionsBox btnText={this.state.actionsText} handler={i => this.handleClick(i)}/>
        </div>
      </div>
    );
  }
}

export default App;
