import FireBoi from '../FireBoi';
import React from 'react';

class BlackoutFire extends FireBoi {
  name = 'Blackout';
  turnedOn = false;
  states = {
    'start': {
      text: <>
        <h4>Revolt! Kind of.</h4>
        <p>Some of the users have reached out to you to let you know about their net neutrality protests! After that
        insufferable Ajit Pai done goofed and sold the Internet to Bomcast, the voters realized the err of their ways.
        </p>
        <p>They want you to participate in a day of blackout to demonstrate the likely near future.</p>
        <p>What do you do?</p>
        <p>Turn of the site for the day. It'll hurt your profits today, but earn you a lot of goodwill with the usres.
        </p>
        <p>Encourage content on the topic, but keep it live. Gotta make that cash money!</p>
        <p>Maybe Later?</p>
      </>,
      btns: [
        {
          text: 'Shut \'Er Down!',
          func: () => {
            this.app.addUsers(500);
            this.app.addMoney(-1 * Math.floor(0.03 * this.app.state.users));
            this.loadState('whoops');
            this.app.endCycle();
          },
        },
        {
          text: 'Gotta Make That Money',
          func: () => {
            this.app.addUsers(-500);
            this.app.removeFire(this);
            this.app.endCycle();
          },
        },
        {
          text: 'Later',
          func: () => {
            this.app.setState({currentFire: this.app.fires['main']});
          },
        },
      ],
    },
    'whoops': {
      text: <>
        <h4>Fight the man! But he'll fight back.</h4>
        <p>Your users loved it! Your support for their right to a free and equal net will not be ignored.</p>
        <p>They users adore you and mail you all the cupcakes. They even tell their friends!</p>
        <p>But it's likely Bomcast heard about this too...</p>
      </>,
      btns: [
        {
          text: 'Continue',
          func: () => {
            //this.app.setState({dangerous: this.app.state.dangerous + 1});
            // this.app.addMoney(-500);
            if(Math.random() > .5)  {
              this.setState({throttle: 1});
              this.loadState('ouch');
            }
            else {
              this.app.removeFire(this);
            }
            //this.app.endCycle();
          },
        },
      ],
    },
    'ouch': {
      text: <>
        <h4>Consequences.</h4>
        <p>Your email is lit up by Bomcast. Apparently fighting their legislation doesn't earn you any good will.</p>
        <p>They're throttling you. No way out. And you know this is gonna impact your site's ability to grow.</p>
      </>,
      btns: [
        {
          text: 'Continue',
          func: () => {
            this.app.removeFire(this);
            this.app.endCycle();
          },
        },
      ],
    },
  };

  check() {
    return !this.app.doneBlackout && this.app.targetBalance > 10000 && Math.random() * this.app.state.dangerous > 0.8;
  }

  activate() {
    this.app.doneBlackout = true;
  }
}

export default BlackoutFire;
