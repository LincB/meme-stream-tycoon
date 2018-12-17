import React from 'react';
import FireBoi from './FireBoi';

class MainFire extends FireBoi {

  states = {
    'start': {
      text: <>
        <h2>Welcome to Meme Stream Tycoon!</h2>
        <p>You are a young, self-taught programmer, eager to change the world with your skills.
          Of course, like most of the other programmers you know, you want to make a lot of money along
          the way.</p>
        <p>Seeing the wild success of online video streaming, you think it's a great way to start your
          career. All you have to do is make a cool site and you'll be rich, right?</p>
        <p><i>Use the buttons below to navigate your journey.</i></p>
      </>,
      btns: [
        {
          text: 'Continue',
          func: () => this.loadState('build'),
        }
      ],
    },
    'build': {
      text: <>
        <p>Build your site</p>
      </>,
      btns: [
      ],
    }
  };

  constructor(app) {
    super(app, 'MainFire');
    this.loadState('start');
  }

  loadState(stateName) {
    let state = this.states[stateName];
    this.text = state.text;
    this.btns = state.btns;
    this.app.setState({currentFire: this});
  }
}

export default MainFire;
