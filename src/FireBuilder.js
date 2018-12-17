import FireBoi from './FireBoi';
import MainFire from './MainFire';

function build(app) {
  let lst = [];
  let fire1Btns = [{text: "put it out", func: () => {}}, {text: "put it out", func: () => {}},
    {text: "put it out", func: () => {}} ];
  let fire1 = new FireBoi(app, "fire1", "http://www.stickpng.com/assets/images/58a1e021e33a543010fac278.png",
      "this is the first fire", 1, 2, fire1Btns);
  lst.unshift(fire1);
  // if(fire1.turnedOn)fire1.turnedOn = false;

  let fire2Btns = [{text: "put it out", func: () => {}}, {text: "put it out", func: () => {}},
    {text: "put it out", func: () => {}} ];
  let fire2 = new FireBoi(app, "fire2", "http://www.stickpng.com/assets/images/58a1e021e33a543010fac278.png",
      "this is the second fire", () => {}, () => {}, fire2Btns);
  lst.unshift(fire2);

  let fire3Btns = [{text: "put it out", func: () => {}}, {text: "put it out", func: () => {}},
    {text: "put it out", func: () => {}} ];
  let fire3 = new FireBoi(app, "fire3", "http://www.stickpng.com/assets/images/58a1e021e33a543010fac278.png",
      "this is the first fire", () => {}, () => {}, fire3Btns);
  lst.unshift(fire3);
  lst.unshift(new MainFire(app));
  return lst;
}

export default build;