import FireBoi from '../FireBoi';
import React from 'react';

class WarrantFire extends FireBoi {
  name = 'Warrant';
  turnedOn = true;
  states = {
    'start': {
      text: <>
        <h4>Knock Knock!</h4>
        <p>It's the fuzz! They're at your door for some reason and they demand you let them in. Turns out, they don't
        have a warrant. Apparently, all the snow on your roof melts too fast (probably all the gpu heat from the
          crypto-mining). They say you're totally growing drugs.</p>
        <p>What do you do?</p>
        <p>Let 'em in. You're not breaking the law. Why bother?</p>
        <p>That's a no from me, chief. No warrant, no search.</p>
        <p>Call your lawyer. They'll know best.</p>
      </>,
      btns: [
        {
          text: 'Come on in',
          func: () => {
            this.app.addMoney(-500);
            this.loadState('bribe');
            //this.app.endCycle();
          },
        },
        {
          text: 'Not A Chance',
          func: () => {
            this.loadState('no-pay');
            //this.app.endCycle();
          },
        },
        {
          text: 'Phone A Friend',
          func: () => {
            this.loadState('lawyer');
            //this.app.endCycle();
          },
        },
      ],
    },
    'no-pay': {
      text: <>
        <h4>Win the war. Not the battle.</h4>
        <p>They're mad. And big. And armed. They're coming in no matter what. </p>
        <p>They barge right on in and stomp around. After tossing around some of your desk clutter one suddenly
          exclaims, "AHA!"</p>
        <p>he holds up a bag of marijuana that you know wasn't there before. you're being framed! </p>
        <p>They offer to toss it out for you for a small fee of $500.</p>
        <p>Take your pick.</p>
        <p>You could just pay up. Easier that way.</p>
        <p>You could also tell em' off. Not yours, not your problem.</p>
      </>,
      btns: [
        {
          text: 'Pay Up',
          func: () => {
            //this.app.setState({dangerous: this.app.state.dangerous + 1});
            this.app.addMoney(-500);
            this.loadState('bribe');
            //this.app.endCycle();
          },
        },
        {
          text: 'No Way!',
          func: () => {
            this.loadState('no-bribe');
          },
        },
      ],
    },
    'bribe': {
      text: <>
        <h4>Shut Up And Take My Money</h4>
        <p>They snap the cash right off ya'. They pivot on their heels and laugh their way out the door. Great work,
          genius. Seems like somebody forgot their fourth amendment rights</p>
        <p>Now you know. Gotta look on the bright side.</p>
      </>,
      btns: [
        {
          text: 'Continue',
          func: () => {
            this.loadState('start');
            //this.app.endCycle();
          },
        },
      ],
    },
    'no-bribe': {
      text: <>
        <h4>Not A Chance! I Know My Rights!</h4>
        <p>They grumble and puff on out. They knew you had your rights on lock. They're not gonna fleece you this
        time. But they'll be back. Eventually.</p>
      </>,
      btns: [
        {
          text: 'Continue',
          func: () => {
            this.loadState('start');
            //this.app.endCycle();
          },
        },
      ],
    },
    'lawyer': {
      text: <>
        <h4>Ring Ring</h4>
        <p>A quick call to your lawyer and they've got your back.</p>
        <p>They instruct you to put your phone on speaker and hold it out in front of you.</p>
        <p>From the other side of the phone you hear a slight cough and then firmly, "Warrant".</p>
      </>,
      btns: [
        {
          text: 'Continue',
          func: () => {
            this.loadState('no-bribe');
            //this.app.endCycle();
          },
        },
      ],
    },
  };
}

export default WarrantFire;