import FireBoi from '../FireBoi';
import React from 'react';

class DefamationFire extends FireBoi {
  name = 'Defamation';
  turnedOn = false;
  states = {
    'start': {
      text: <>
        <h4>You Have Mail!</h4>
        <p>Some local celebrity wrote in. It's not the praise you expected. In fact, they want to sue you!</p>
        <p>Apparently, someone posted some hurtful stuff about them on MemeStream. Something "false and defamatory" was posted
        by a user and they blame you for not taking it down. They offer to settle for $5000.</p>
        <p>What do you do?</p>
        <p>Cut the check. Get it over with. This'll be lower than if they win in court.</p>
        <p>Write back that you're not gonna pay. You're protected somehow, right?</p>
        <p>Call your lawyer. They'll know best.</p>
      </>,
      btns: [
        {
          text: 'Pay Up',
          func: () => {
            this.app.addMoney(-5000);
            this.loadState('pay-out');
          },
        },
        {
          text: 'Hard No',
          func: () => {
            this.loadState('no-pay');
          },
        },
        {
          text: 'Phone A Friend',
          func: () => {
            this.app.addMoney(-500);
            this.loadState('lawyer');
          },
        },
      ],
    },
    'pay-out': {
      text: <>
        <h4>The Easy Way Out</h4>
        <p>You cut the check and mail it out right away. This would be better than losing in court.</p>
        <p>Yet you feel there could've been a better way...</p>
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
    'no-pay': {
      text: <>
        <h4>Not A Chance!</h4>
        <p>You write em' back that there's no way you're gonna pay out on this. You're 100% protected by Section 230!</p>
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
        <h4>Better Call Paul.</h4>
        <p>You dial up your trusty lawyer and tell them your predicament.</p>
        <p>The other side of the line is silent for a moment and then prods:</p>
        <p>"Is that it?"</p>
        <p>After you reassure them that that is indeed all there is, you hear a heavy sigh from the other end and: </p>
        <p>"You must've failed 183... Section 230, dummy."</p>
        <p>After they tell you that they'll handle the suit, they charge you another $500 for wasting their time.</p>
      </>,
      btns: [
        {
          text: 'Continue',
          func: () => {
            this.app.addMoney(-500);
            this.app.removeFire(this);
            this.app.endCycle();
          },
        },
      ],
    },
  };

  check() {
    return !this.app.doneDefamation && this.app.targetBalance > 5000 &&
      Math.random() * this.app.state.dangerous > 0.9;
  }

  activate() {
    this.app.doneDefamation = true;
  }
}

export default DefamationFire;
