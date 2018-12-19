import React from 'react';
import FireBoi from './FireBoi';
import MainFire from './fires/MainFire';
import CopyFire from "./fires/CopyFire";

function build(app) {
  let fires = {};

  fires['main'] = new MainFire(app);
  fires['copy'] = new CopyFire(app);
  Object.keys(fires).map(k => fires[k].init());
  return fires;
}

export default build;