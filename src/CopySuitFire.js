import FireBoi from './FireBoi';
import React from 'react';

class CopySuitFire extends FireBoi {
  name = 'CopySuit';
  turnedOn = true;
  states = {
    'start': {
      text: <>
        <h4>Time's Up! You've Been Served.</h4>
        <p>Of-The-Universe Studios managed to get you to court. Time's up you've gotta deal with this now.</p>
        <p>It's up to you. What should you do?</p>
        <p>You can hire a a lawyer and let them try and save the case.</p>
        <p>There's also the option to represent yourself. What could go wrong?</p>
        <p>Or, you could always no show. You've got stuff to do!.</p>
      </>,
      btns: [
        {
          text: 'Lawyer Up',
          func: () => {
            this.app.addMoney(-5000);
            this.loadState('start');
            //this.app.endCycle();
          },
        },
        {
          text: 'Represent Yourself',
          func: () => {
            this.loadState('self-rep');
            this.app.addMoney(-25000);
            //this.app.endCycle();
          },
        },
        {
          text: 'No Show',
          func: () => {
            this.app.addMoney(-50000);
            this.loadState('start');
            //this.app.endCycle();
          },
        },
      ],
    },
    'no-show': {
      text: <>
        <h4>Not your best idea.</h4>
        <p>It doesn't even matter who was right. If you don't show, enjoy a fat default value.</p>
        <p>The judge was swooned by the fact that the studio bothered to show up. That'll be $50,000</p>
      </>,
      btns: [
        {
          text: 'Continue',
          func: () => {
            //this.app.setState({dangerous: this.app.state.dangerous + 1});
            this.loadState('no-show');
            //this.app.endCycle();
          },
        },
      ],
    },
    'self-rep': {
      text: <>
        <h4>Seriously!?</h4>
        <p>It doesn't even matter who was right. Did you think you were gonna underdog the big studio lawyers?
          Luckily, out of sheer pity the judge awarded a fairly low payout. That'll be $25,000. Let the professionals
          handle this stuff!</p>
      </>,
      btns: [
        {
          text: 'Continue',
          func: () => {
            //this.app.setState({dangerous: this.app.state.dangerous + 1});
            this.loadState('no-rep');
            //this.app.endCycle();
          },
        },
      ],
    },
  };
}

export default CopySuitFire;
