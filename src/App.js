import React, { Component } from 'react';
import './App.css';
import StatsBox from './StatsBox';
import ThreadsBox from './ThreadsBox';
import ActionsBox from './ActionsBox';
import StoryBox from './StoryBox';
import ThreadPopup from './ThreadPopup';
import build from './FireBuilder';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 0,
      users: 0,
      staff: 0,
      days: 0,
      // actionsText: ["Yes", "No", "Later"],
      showPopup: false,
      storyText: "",
      currentFire: null,
    };
    this.fireQueue = build(this);
  }

  handleClick(i) {
    if (this.state.currentFire == null) return;
    console.log(this.state.currentFire);
    if (this.state.currentFire.btns.length > i) {
      this.state.currentFire.btns[i].func();
    }
  }

  stackClick(i) {
    // console.log(i);
    this.setState({currentFire: this.fireQueue[i]});
    this.setState({showPopup: true});

  }

  static toDollars(amount) {
    return "$" + amount.toString().replace(/\d(?=(\d{3})+$)/g, '$&,');
  }

  render() {
    let popupText = '';
    let actionsText = ['', '', ''];
    if (this.state.currentFire !== null) {
      popupText = this.state.currentFire.text;
      this.state.currentFire.btns.forEach((btn, i) => actionsText[i] = btn.text);
    }
    return (
      <div className="app">
        <div className="main-grid">
          <StatsBox
            balance={App.toDollars(this.state.balance)}
            users={this.state.users}
            staff={this.state.staff}
            days={this.state.days} />
          <StoryBox contents={this.state.storyText}/>
          <ThreadPopup visible={this.state.showPopup} popupText={popupText}/>
          <ThreadsBox fireQueue={this.fireQueue} handler={i => this.stackClick(i)}/>
          <ActionsBox btnText={actionsText} handler={i => this.handleClick(i)}/>
        </div>
      </div>
    );
  }
}

export default App;
