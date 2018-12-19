import FireBoi from '../FireBoi';
import React from 'react';

class CopyFire extends FireBoi {
  name = 'Gone Viral!';
  turnedOn = false;
  image = 'https://www.freeiconspng.com/uploads/red-up-arrow-png-26.png';
  states = {
    'start': {
      text: <>
        <p>You wake up one morning and notice that the view counter for MemeStream has shot up. At first
          you think it's a bug in your cheap web hosting, but then you go on Facebook, and see everyone
          sharing a link to a video on MemeStream!</p>
        <p>The latest viral home-video hit was posted on your site. What a lucky break! This might be just what
          you need to keep your business afloat.</p>
      </>,
      btns: [
        {
          text: 'Awesome!',
          func: () => {
            this.app.removeFire(this);
          },
        },
      ],
    },
  };

  check() {
    return this.app.finishedIntro && Math.random() > 0.8 &&
      this.app.state.users < 20000;
  }

  activate() {
    this.app.addUsers(10000);
  }
}

export default CopyFire;
