import React from 'react';
import FireBoi from './FireBoi';
import MainFire from './MainFire';

function build(app) {
  let fires = {};

  fires['main'] = new MainFire(app);
  Object.keys(fires).map(k => fires[k].init());
  return fires;
}

export default build;