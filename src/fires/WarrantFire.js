import FireBoi from '../FireBoi';
import React from 'react';

class WarrantFire extends FireBoi {
  name = 'Warrant';
  turnedOn = false;
  image = 'http://cdn.onlinewebfonts.com/svg/img_377073.png';
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
            // this.app.addMoney(-500);
            this.loadState('come-in');
          },
        },
        {
          text: 'Not A Chance',
          func: () => {
            this.loadState('no-pay');
          },
        },
        {
          text: 'Phone A Friend',
          func: () => {
            this.loadState('lawyer');
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
        <p>he holds up a bag of marijuana that you know wasn't there before. You're being framed! </p>
        <p>They offer to toss it out for you for a small fee of $500.</p>
        <p>Take your pick.</p>
        <p>You could just pay up. Easier that way.</p>
        <p>You could also tell em' off. Not yours, not your problem.</p>
      </>,
      btns: [
        {
          text: 'Pay Up',
          func: () => {
            this.app.addMoney(-500);
            this.loadState('bribe');
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
          genius. Seems like somebody forgot their fourth amendment rights.</p>
        <p>Now you know. Gotta look on the bright side.</p>
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
            this.app.removeFire(this);
            this.app.endCycle();
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
          },
        },
      ],
    },
    'come-in': {
      text: <>
        <h4>Oops</h4>
        <p>They breeze on by and take a look around. Before long they're rummaging through your desk.</p>
        <p>One of the two shouts out that he found something and holds up a baggie of marijuana. It's not yours.</p>
        <p>They say it's not to worry and happily help themselves to some of the laptops you have laying around.
          They're stealing your stuff!</p>
        <p>You were trying to be polite and now you're being framed and robbed! Unfortunately, you're powerless
          to stop them now.</p>
      </>,
      btns: [
        {
          text: 'Continue',
          func: () => {
            this.app.addMoney(-2000);
            this.app.removeFire(this);
          },
        },
      ],
    },
  };

  check() {
    return !this.app.doneWarrant && this.app.targetBalance > 10000 && Math.random() * this.app.state.dangerous > 0.8;
  }

  activate() {
    this.app.doneWarrant = true;
  }
}

export default WarrantFire;
