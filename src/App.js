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
    this.fires = build(this);
    this.state = {
      balance: 0,
      users: 0,
      staff: 0,
      days: 0,

      showPopup: true,
      storyText: "",
      visibleFires: [this.fires['main']],
      currentFire: this.fires['main'],

      copyRisk: 0,
      criminalCopyRisk: 0,
    };
  }

  handleClick(i) {
    if (this.state.currentFire == null) return;
    if (this.state.currentFire.btns.length > i) {
      this.state.currentFire.btns[i].func();
    }
  }

  stackClick(fireIdx) {
    this.setState({currentFire: this.state.visibleFires[fireIdx]});
    this.setState({showPopup: true});

  }

  endCycle() {
    this.addDays(7);
    this.addMoney(-100 - 500 * this.state.staff + Math.floor(0.02 * this.state.users));
    this.addUsers(Math.floor(this.state.users * 0.1));
    // Update active fires
    let fireKeys = Object.keys(this.fires);
    for (let i = 0; i < fireKeys.length; i++) {
      let fire = this.fires[fireKeys[i]];
      if (fire.turnedOn) continue;
      if (!fire.check()) continue;

      fire.turnedOn = true;
      this.setState({visibleFires: this.state.visibleFires.concat([fire])});
      break;
    }
  }

  addMoney(b) {
    this.setState(prevState => {return {balance: prevState.balance + b};});
  }

  addUsers(u) {
    this.setState(prevState => {return {users: prevState.users + u};});
  }

  addStaff(s) {
    this.setState({staff: this.state.staff + s});
  }

  addDays(d) {
    this.setState({days: this.state.days + d});
  }

  static toDollars(amount) {
    return "$" + App.toThousandDelimited(amount);
  }

  static toThousandDelimited(amount) {
    return amount.toString().replace(/\d(?=(\d{3})+$)/g, '$&,');
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
            users={App.toThousandDelimited(this.state.users)}
            staff={this.state.staff}
            days={this.state.days} />
          <StoryBox contents={this.state.storyText}/>
          <ThreadPopup visible={this.state.showPopup} popupText={popupText}/>
          <ThreadsBox fires={this.state.visibleFires} handler={i => this.stackClick(i)}/>
          <ActionsBox btnText={actionsText} handler={i => this.handleClick(i)}/>
        </div>
      </div>
    );
  }
}

export default App;
