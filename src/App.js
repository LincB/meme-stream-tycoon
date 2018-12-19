import React, { Component } from 'react';
import './App.css';
import StatsBox from './StatsBox';
import ThreadsBox from './ThreadsBox';
import ActionsBox from './ActionsBox';
import StoryBox from './StoryBox';
import ThreadPopup from './ThreadPopup';
import build from './FireBuilder';

class App extends Component {

  targetBalance = 0;
  targetUsers = 0;
  targetStaff = 0;
  targetDays = 0;
  animateInterval = -1;

  moderators = 0;

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
      throttle: 0,
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
      console.log(fire);
      if (fire.turnedOn) continue;
      if (!fire.check()) continue;

      fire.turnedOn = true;
      this.setState({
        visibleFires: this.state.visibleFires.concat([fire]),
        currentFire: fire,
      });
      break;
    }
  }

  removeFire(toRemove) {
    this.setState({
      visibleFires: this.state.visibleFires.filter(f => f !== toRemove),
      currentFire: this.fires['main'],
    });
    toRemove.turnedOn = false;
  }

  addMoney(b) {
    this.targetBalance += b;
    this.maybeAnimate();
    // this.setState(prevState => {return {balance: prevState.balance + b};});
  }

  addUsers(u) {
    this.targetUsers += Math.floor(u * (1 - this.state.throttle * .5));
    this.maybeAnimate();
  }

  addStaff(s) {
    this.targetStaff += s;
    this.maybeAnimate();
  }

  addDays(d) {
    this.targetDays += d;
    this.maybeAnimate();
  }

  maybeAnimate() {
    if ((this.targetBalance !== this.state.balance ||
          this.targetUsers !== this.state.users ||
          this.targetStaff !== this.state.staff ||
          this.targetDays !== this.state.days) && this.animateInterval < 0) {
      this.animateInterval = setInterval(this.animate.bind(this), 30);
    }
  }

  animate() {
    let active = false;
    // debugger;
    if (this.targetBalance !== this.state.balance) {
      let diff = this.targetBalance - this.state.balance;
      let sign = diff / Math.abs(diff);
      // debugger;
      let change = Math.min(Math.max(Math.floor(0.1 * Math.abs(diff)), 2), Math.abs(diff));
      this.setState(prevState => {return {balance: prevState.balance + sign * change};});
      active = true;
    }

    if (this.targetUsers !== this.state.users) {
      let diff = this.targetUsers - this.state.users;
      let sign = diff / Math.abs(diff);
      let change = Math.min(Math.max(Math.floor(0.1 * Math.abs(diff)), 2), Math.abs(diff));
      this.setState(prevState => {return {users: prevState.users + sign * change};});
      active = true;
    }

    if (this.targetStaff !== this.state.staff) {
      let diff = this.targetStaff - this.state.staff;
      let sign = diff / Math.abs(diff);
      this.setState(prevState => {return {staff: prevState.staff + sign};});
      active = true;
    }

    if (this.targetDays !== this.state.days) {
      let diff = this.targetDays - this.state.days;
      let sign = diff / Math.abs(diff);
      this.setState(prevState => {return {days: prevState.days + sign};});
      active = true;
    }

    if (!active) {
      clearInterval(this.animateInterval);
      this.animateInterval = -1;
    }
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
          <ThreadsBox fires={this.state.visibleFires} handler={i => this.stackClick(i)}
                      currentFire={this.state.currentFire}/>
          <ActionsBox btnText={actionsText} handler={i => this.handleClick(i)}/>
        </div>
      </div>
    );
  }
}

export default App;
