// import React from 'react';
import MainFire from './fires/MainFire';
import CopyFire from './fires/CopyFire';
import ViralFire from './fires/ViralFire';
import CopySuitFire from './fires/CopySuitFire';
import BlackoutFire from './fires/BlackoutFire';
import NetFire from './fires/NetFire';
import DefamationFire from './fires/DefamationFire';
import WarrantFire from './fires/WarrantFire';
import BankruptFire from './fires/BankruptFire';
import WinFire from './fires/WinFire';

function build(app) {
  let fires = {};

  fires['main'] = new MainFire(app);
  fires['bankrupt'] = new BankruptFire(app);
  fires['win'] = new WinFire(app);
  fires['copy'] = new CopyFire(app);
  fires['copysuit'] = new CopySuitFire(app);
  fires['viral'] = new ViralFire(app);
  fires['blackout'] = new BlackoutFire(app);
  fires['blackmail'] = new NetFire(app);
  fires['defamation'] = new DefamationFire(app);
  fires['warrant'] = new WarrantFire(app);
  Object.keys(fires).map(k => fires[k].init());
  return fires;
}

export default build;