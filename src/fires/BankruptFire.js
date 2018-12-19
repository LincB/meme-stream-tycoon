import FireBoi from '../FireBoi';
import React from 'react';

class BankruptFire extends FireBoi {
  name = 'Bankrupt';
  turnedOn = false;
  states = {
    'start': {
      text: <>
        <h4>Back in court... to declare bankruptcy</h4>
        <p>Well, that was fun while it lasted. You're back on the job market, hoping more than ever
          that some company will be foolish enough to hire you. Of-The-Universe Studios continues to
          aggressively pursue dubious copyright claims, and Bomcast extorts another few hundred
          small businesses each day</p>
        <p>If only you remembered what you learned in CPSC 183, you might have been able to avoid some of
          your mistakes! Try keeping those lessons in mind next time you play.</p>
      </>,
      btns: [
        {
          text: 'Play again',
          func: () => window.location.reload(),
        },
      ],
    },
  };

  check() {
    return this.app.targetBalance < 0;
  }
}

export default BankruptFire;
