import FireBoi from './FireBoi';
import React from 'react';

class NetFire extends FireBoi {
  name = 'NetBlackmail';
  turnedOn = true;
  states = {
    'start': {
      text: <>
        <h4>Blackmail!?</h4>
        <p>Bomcast sent you a letter saying that your web traffic is too much of a strain on their systems!</p>
        <p>They're demanding that you pay them $5000 or else they're gonna start throttling your site!</p>
        <p>It's up to you. What should you do?</p>
        <p>You can pay 'em now and keep things smooth.</p>
        <p>You can also just call their bluff. No way you're gonna pay!</p>
        <p>Maybe you need some time to think about this.</p>
      </>,
      btns: [
        {
          text: 'Pay Up!',
          func: () => {
            this.app.addMoney(-5000);
            this.setState({throttle: 0}); //retroactive
            this.loadState('start');
            //this.app.endCycle();
          },
        },
        {
          text: 'Not A Chance',
          func: () => {
            this.setState({throttle: 1}); //done goofed.
            this.app.addUsers(Math.round(-.05 *  this.state.users));
            this.loadState('no-pay');
            //this.app.endCycle();
          },
        },
        {
          text: 'Maybe Later',
          func: () => {
            this.loadState('start');
            //this.app.endCycle();
          },
        },
      ],
    },
    'no-pay': {
      text: <>
        <h4>This is criminal (but unfortunately isn't)!</h4>
        <p>Great work, Ajit Pai. They didn't like your defiance and have emailed you to let you know you're on the
        throttle list now.</p>
        <p>You have the feeling this will hurt your ability to grow somewhat.</p>
      </>,
      btns: [
        {
          text: 'Continue',
          func: () => {
            //this.app.setState({dangerous: this.app.state.dangerous + 1});
            this.loadState('start');
            //this.app.endCycle();
          },
        },
      ],
    },
  };
}

export default NetFire;
