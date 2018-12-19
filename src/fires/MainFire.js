import FireBoi from '../FireBoi';
import React from 'react';

class MainFire extends FireBoi {
  name = 'Site Builder';
  turnedOn = true;
  doneCupcake = false;
  // image = 'https://cdn.shopify.com/s/files/1/2506/0996/collections/hand-4_1200x1200.png?v=1511386856';
  states = {
    'start': {
      text: <>
        <h2>Welcome to Meme Stream Tycoon!</h2>
        <p>You are a recent graduate of Yale College and Harvard Law School, burdened by $100,000 of debt.
          With the law recruiting season past and no job offers in sight, you think back on your
          computer science degree and realize that a tech career might be your only hope. If you could
          pay off your debt within a year, it would be a miracle!</p>
        <p>Still, none of the big tech companies are interested in hiring you, so with $2,000 scrounged
          from friends and family, you decide to strike out on your own. You're going to create a video
          streaming site, and it had better be the best on the entire internet.</p>
        <p><i>Use the buttons below to navigate your journey.</i></p>
      </>,
      btns: [
        {
          text: 'Continue',
          func: () => {
            this.app.addMoney(2000);
            this.loadState('build');
          },
        }
      ],
    },
    'build': {
      text: <>
        <p>After finding a place on a friend's couch to crash for a few weeks, you get to work.
          With a simple, unstyled HTML interface, it's not fancy -- but it's generative, and on the
          internet, that's all that matters, right?</p>
        <p>How to do want to spread the word about your amazing new site? You could message all
          your friends, shamelessly plug in YouTube comments, or even post in your college meme group.</p>
      </>,
      btns: [
        {
          text: 'Friends',
          func: () => {
            this.app.addUsers(20);
            this.loadState('ad-friends');
            this.app.endCycle();
          }
        },
        {
          text: 'YouTube',
          func: () => {
            this.app.addUsers(100);
            this.loadState('ad-youtube');
            this.app.endCycle();
          }
        },
        {
          text: 'Meme group',
          func: () => {
            this.app.addUsers(200);
            this.loadState('ad-meme-group');
            this.app.endCycle();
          }
        },
      ],
    },
    'ad-friends': {
      text: <>
        <p>Your friends know you difficult situation, so they don't mind the advertising too much.
          They post a few of their hilariously amateur home videos, and take a look around at the videos
          others have posted. A few hours later, they lose interest and go back to browsing Netflix.</p>
      </>,
      btns: [
        {
          text: 'Continue',
          func: () => this.loadState('new-feature'),
        }
      ],
    },
    'ad-youtube': {
      text: <>
        <p>After watching the angry replies accumulate under your comment, you're excited to see a few page views
          begin to accumulate. The first postings come in from all around the world, a disjointed mess of
          memes, advertising spam, and the occasional conspiracy theory.</p>
      </>,
      btns: [
        {
          text: 'Continue',
          func: () => this.loadState('new-feature'),
        }
      ],
    },
    'ad-meme-group': {
      text: <>
        <p>While many of your former classmates simply scroll past the advertisement, a few decide to
          take a look, and they realize the empty, unmoderated site is the perfect platform for their
          humorous procrastination.</p>
        <p>Before long, every other post in the meme group is a link to your
          new site, and traffic is rising every day.</p>
      </>,
      btns: [
        {
          text: 'Continue',
          func: () => this.loadState('new-feature'),
        }
      ],
    },
    'new-feature': {
      text: <>
        <p>Your initial attempts at advertising have been promising, but you know your site needs more
        to really take off. You plan to add a new feature that will distinguish your site from all the
        other video streaming sites on the internet. How would you like to focus your site?</p>
        <p>a. The users own MemeStream! The site will be moderated only by the users' votes.</p>
        <p>b. MemeStream is all about freedom! Users can upload DRM-protected content, and it is
          automatically decrypted so it can be viewed by anyone.</p>
        <p>c. Nothing but memes! All comments must be in the format of block capital text over an image.</p>
      </>,
      btns: [
        {
          text: 'User ownership',
          func: () => {
            this.app.setState({copyRisk: this.app.state.copyRisk + 2});
            this.app.addUsers(this.app.state.users * 2);
            this.loadState('ad-campaign');
            this.app.endCycle();
          },
        },
        {
          text: 'DRM freedom',
          func: () => {
            this.app.setState({copyRisk: this.app.state.copyRisk + 4});
            this.app.addUsers(this.app.state.users * 6);
            this.loadState('ad-campaign');
            this.app.endCycle();
          },
        },
        {
          text: 'Memes!',
          func: () => {
            this.app.addUsers(Math.floor(this.app.state.users * 0.5));
            this.loadState('ad-campaign');
            this.app.endCycle();
          },
        },
      ],
    },
    'ad-campaign': {
      text: <>
        <p>Ok, now it's time to show your incredible new features to the world with another ad
          campaign, professionally done this time. What aspect of your site do you want to promote?</p>
        <p>a. MemeStream allows maximum creative control. You can completely customize your site with
          custom HTML and CSS, just like you used to love on MySpace!</p>
        <p>b. Your site's educational value, complete with fake testimonials from satified users
          who have started passing their classes since joining MemeStream.</p>
        <p>c. The complete freedom of MemeStream, the way the internet was orignally meant to be!
          MemeStream is an escape from the corporatized culture of YouTube, Netflix, and Vimeo.</p>
      </>,
      btns: [
        {
          text: 'Customization',
          func: () => {
            this.app.addUsers(this.app.state.users * 2);
            this.app.finishedIntro = true;
            this.loadState('business-go');
            this.app.endCycle();
          },
        },
        {
          text: 'Education',
          func: () => {
            this.app.addUsers(Math.floor(this.app.state.users * 0.25));
            this.app.finishedIntro = true;
            this.loadState('business-go');
            this.app.endCycle();
          },
        },
        {
          text: 'Freedom',
          func: () => {
            this.app.setState({copyRisk: this.app.state.copyRisk + 1});
            this.app.finishedIntro = true;
            this.app.addUsers(this.app.state.users * 4);
            this.loadState('business-go');
            this.app.endCycle();
          },
        },
      ],
    },
    'business-go': {
      text: <>
        <p>Your site is up and running, and if all your hard work has paid off, the users should
          start streaming in any minute, if they haven't already!</p>
        <p>You might want to hire some programmers to keep improving your site -- they'll be happy
          to help as long as you pay their salary each week and keep the office well stocked
          with cupcakes. If you're not ready to take that leap yet, you can wait and see where the ups
          and downs of internet fame take you. Remember, your loans are quickly coming due!</p>
        <p><i>If you'd like to see all the places where MemeStream can take you, living dangerously might be the
          best way to go.</i></p>
      </>,
      btns: [
        {
          text: 'Hire staff',
          func: () => {
            this.app.addStaff(1);
            this.app.addMoney(-500);
            this.loadFiller();
            this.app.endCycle();
          },
        },
        {
          text: 'Let your site grow',
          func: () => {
            this.loadFiller();
            this.app.endCycle();
          },
        },
        {
          text: 'Live dangerously',
          func: () => {
            this.app.setState({dangerous: this.app.state.dangerous + 0.5});
            this.loadFiller();
            this.app.endCycle();
          },
        },
      ],
    },
    'cupcake-problem': {
      text: <>
        <h4>Cupcake Strike!</h4>
        <p>Your employees have developed a taste for cupcakes, and threaten to quit unless you double
          their supply.</p>
        <p>That could cost you thousands of dollars, but you can't afford to have your
          former employees disparging your business! What do you do?</p>
      </>,
      btns: [
        {
          text: 'Give in',
          func: () => {
            this.app.addMoney(-1000);
            this.loadFiller();
            this.app.endCycle();
          }
        },
        {
          text: 'Refuse',
          func: () => {
            this.app.addUsers(Math.floor(-0.3 * this.app.targetUsers));
            this.loadState('cupcake-refuse');
          }
        },
      ],
    },
    'cupcake-refuse': {
      text: <>
        <p>That might not have been the best idea. None of your employees quit, but rumors start
          to appear on online message that your'e a terrible business owner and MemeStream
          is corrupt. You thing you know who started them.</p>
      </>,
      btns: [
        {
          text: 'Continue',
          func: () => {
            this.loadFiller();
            this.app.endCycle();
          }
        },
      ],
    },
  };

  fillers = [
    <>
      <p>Isn't this a great life? You work whatever hours wou want, eat cupcakes with your employees, and
        ocassionally take a look at your site's ever-increasing users numbers.</p>
      <p>You're so glad you aren't sitting in a law office all day, or even worse, lecturing to a class
        of unruly college students!</p>
    </>,
    <>
      <p>You get invited to the local TV station to give an interview about MemeStream, "the new Internet
        phonomenon that's sweeping the millenial generation."</p>
      <p>It's great to feel important, but you leave with the nagging feeling that you should've worn
        somethng nicer than the hackathon T-shirt you've been wearing all week.</p>
    </>,
    <>
      <p>Grandma calls, saying she's heard about this new site called "Meemee Stream," and that you're
        the one behind it.</p>
      <p>You try to explain to her what your work is about, but she still seems to wish you ended up
        as a lawyer.</p>
    </>,
    <>
      <p>You go to your college reunion, and everyone's amazed to see you, the C student who's suddenly
        becoming famous.</p>
      <p>They all either think that your site will be the next billion-dollar startup or that it'll fail tomorrow.
        You wish you knew who was right.</p>
    </>,
    <>
      <p>You discover Pokémon Go and spend all week playing. You almost miss the only meeting you had
        scheduled all week, and promise you'll be more focused next week.</p>
      <p>Wait, the season finale of <i>Game of Thrones</i> is airing tomorrow!</p>
    </>,
  ];

  loadFiller() {
    if (!this.doneCupcake && Math.random() > 0.8) {
      this.loadState('cupcake-problem');
      this.doneCupcake = true;
      return;
    }

    let filler = this.fillers[Math.floor(Math.random() * this.fillers.length)];
    this.states['business-go'].text = (<>
      {filler}
      <p><i>Click an icon on the right sidebar to return to an issue you've previously ignored.</i></p>
    </>);
    this.loadState('business-go');
    // Cupcakes
    // Life is great!
    // TV interview
    // Grandma calls
    // Reunion
    // Pokemon Go
      // New office
  }
}

export default MainFire;
