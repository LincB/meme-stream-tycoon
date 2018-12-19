import FireBoi from '../FireBoi';
import React from 'react';

class FairUseFire extends FireBoi {
  name = 'Infringement?';
  turnedOn = false;
  states = {
    'start': {
      text: <></>,
      btns: [
        {
          text: 'Take it down',
          func: () => {
            this.app.addMoney(Math.floor(-0.2 * this.app.targetBalance));
            this.loadState('takedown');
          },
        },
        {
          text: 'Leave it up',
          func: () => this.loadState('leaveit'),
        },
        {
          text: 'Hire new moderators',
          func: () => {
            this.app.addStaff(1);
            this.app.moderators += 1;
            this.app.addMoney(-500);
            this.app.removeFire(this);
            this.app.endCycle();
          },
        },
      ],
    },
    'takedown': {
      'text': <>
        <p>You take down the video and others like it, and your revenue slides from the lost traffic.</p>
        <p>That night, you go to a bar with a college friend who took CPSC 183 with you, and he
          laughs at you for forgetting all about fair use.</p>
      </>,
      btns: [
        {
          text: 'Continue',
          func: () => {
            this.app.removeFire(this);
            this.app.endCycle();
          }
        },
      ],
    },
    'leaveit': {
      'text': <>
        <p>Aha! That's a clear-cut case of fair use!</p>
        <p>Your old college professor is proud.</p>
      </>,
      btns: [
        {
          text: 'Continue',
          func: () => {
            this.app.removeFire(this);
            this.app.endCycle();
          }
        },
      ],
    },
  };

  check() {
    return this.app.finishedIntro && !this.app.doneFairUse &&
      Math.random() * this.app.state.dangerous > 0.8;
  }

  activate() {
    console.log('Activated');
    debugger;
    if (this.app.moderators >= 1) {
      this.states['start'].text = (<>
        <p>Your moderators come to you with a question. They can't quite decide whether a certain video
          should be allowed on the site.</p>
        <p>Most of the video consists of clips from an advertisement by a prominent politician. Between each
          clip, the video contains commentary describing alleged inaccuracies and misleading statements in the
          clip.</p>
        <p>Your moderators are worried that the video infringes on the orignal ad. What do you do?</p>
      </>);
    } else {
      this.states['start'].text = (<>
        <p>A user flags a video on MemeStream for copyright infringement. At first, you're not sure
          what to do.</p>
        <p>Most of the video consists of clips from an advertisement by a prominent politician. Between each
          clip, the video contains commentary describing alleged inaccuracies and misleading statements in the
          clip.</p>
        <p>You don't want to ignore infringing content on your site, but this video seems different.
          What do you do?</p>
      </>);
    }
    this.text = this.states['start'].text;
    this.app.doneFairUse = true;
  }
}

export default FairUseFire;
