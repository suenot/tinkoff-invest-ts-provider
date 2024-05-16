import { provider } from './provider/index';
const log = require('debug')('bot').extend('main');

const main = async () => {
  log('main start');
  await provider();
};

main();
