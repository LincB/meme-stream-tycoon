import React, { Component } from 'react';
import './App.css';
import StatsBox from './StatsBox';
import ThreadsBox from './ThreadsBox';
import ActionsBox from './ActionsBox';
import StoryBox from './StoryBox';
import ThreadPopup from './ThreadPopup';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 0,
      users: 0,
      staff: 0,
      days: 0,
      actionsText: ["Yes", "No", "Later"],
      showPopup: true,
      storyText: "",
    };
  }

  handleClick(i) {
    switch (i) {
      case 0:
        this.setState({balance: this.state.balance + 123 ** 2});
        break;
      case 1:
        this.setState({showPopup: !this.state.showPopup});
        break;
      case 2:
        this.setState({storyText: this.state.storyText + 'aaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaa aaabbbbbbbbbbbbbbbbbbb bbbbbbbbbbbbbbbbbbb bbbbbbbbbbbbbbbbb bbbbbbbbbbbbb bbbbbbbbbb '});
        break;
      default:
    }
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
          <StoryBox contents={this.state.storyText}/>
          <ThreadPopup visible={this.state.showPopup}/>
          <ThreadsBox/>
          <ActionsBox btnText={this.state.actionsText} handler={i => this.handleClick(i)}/>
        </div>
      </div>
    );
  }
}

export default App;
