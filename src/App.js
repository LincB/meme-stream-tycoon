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
      showPopup: false,
      storyText: "",
      visibleFires: [this.fires['main']],
      currentFire: null,
    };
  }

  handleClick(i) {
    if (this.state.currentFire == null) return;
    console.log(this.state.currentFire);
    if (this.state.currentFire.btns.length > i) {
      this.state.currentFire.btns[i].func();
    }
  }

  stackClick(fireIdx) {
    this.setState({currentFire: this.state.visibleFires[fireIdx]});
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
          <ThreadsBox fires={this.state.visibleFires} handler={i => this.stackClick(i)}/>
          <ActionsBox btnText={actionsText} handler={i => this.handleClick(i)}/>
        </div>
      </div>
    );
  }
}

export default App;
