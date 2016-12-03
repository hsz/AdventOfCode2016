import _ from 'lodash';
import fs from 'fs';

module.exports = function () {

  const input = fs.readFileSync('input.txt', 'utf8').trim().split('\n').map(v => _(v.trim().split(/ +/).map(Number)).value());

  const fn = input => _.cloneDeep(input).map(a => a.sort((a, b) => a - b)).filter(([a, b, c]) => (a + b > c)).length;

  return {

    one: fn(input),

    two: fn(_.chunk([].concat(..._.zip(...input)), 3))

  };

};
