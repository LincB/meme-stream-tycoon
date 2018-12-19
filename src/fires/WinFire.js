import FireBoi from '../FireBoi';
import React from 'react';

class WinFire extends FireBoi {
  name = 'You Win!';
  turnedOn = false;
  image = 'https://www.pngarts.com/files/3/Cupcake-PNG-Image-Background.png';
  states = {
    'start': {
      text: <>
        <h4>Victory!</h4>
        <p>MemeStream has taken off, and it's earned you enough money to pay off your student loans!</p>
        <p>If all goes well, you'll soon be able to achieve you lifelong goal: buying an unlimited supply of Lithuanian
          coffee cake cupcakes.</p>
        <p>If that was too easy, maybe you should try being a bit more reckless next time!</p>
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
    return this.app.targetBalance >= 100000;
  }
}

export default WinFire;
