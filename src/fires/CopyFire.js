import FireBoi from '../FireBoi';
import React from 'react';

class CopyFire extends FireBoi {
  name = 'Copy';
  turnedOn = true;
  states = {
    'start': {
      text: <>
        <h4>Oh no! You've Got A Takedown! Copyright infringement?</h4>
        <p>Of-The-Universe Studios has sent you a takedown order! They claim you've got copyrighted material posted on
          your site! Some user posted on a throwaway account something gray-area enough to garner their attention.</p>
        <p>The Case:</p>
        <ul>
          <li>Title: "Screw HPO Subscriptions"</li>
          <li>The Content:  The video is the key moments of last weeks "Match of Chairs". The audio and video are
            identical to the episode, but they've chopped out some scenes with relatively little impact to the
            plot.</li>
        </ul>
        <p>It's up to you. What should you do?</p>
        <p>You can always hire some moderators to help make these decisions. With some quick (Google) training,
          they should be able to clear this right up.</p>
        <p>There's also the option to just let it ride. Does the studio even have any right to sue over this?</p>
        <p>Or, maybe you should take some time to think about this.</p>
      </>,
      btns: [
        {
          text: 'Hire Devs',
          func: () => {
            this.app.addMoney(-500);
            this.app.addStaff(1);
            this.loadState('start');
            //this.app.endCycle();
          },
        },
        {
          text: 'Let It Ride',
          func: () => {
            this.loadState('start');
            //this.app.endCycle();
          },
        },
        {
          text: 'Let\'s Think About This',
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

export default CopyFire;
