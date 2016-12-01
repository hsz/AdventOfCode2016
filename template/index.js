import _ from 'lodash';
import fs from 'fs';

module.exports = function () {

  const input = fs.readFileSync('input.txt', 'utf8').split('\n').map(v => v);
  const fn = () => 0;

  return {

    one: fn(),

    two: fn()

  };

};
