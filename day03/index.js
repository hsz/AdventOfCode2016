import _ from 'lodash';
import { input, test, sort } from '../utils';

const data = file => input(file).split('\n').map(v => _(v.trim().split(/ +/).map(Number)).value());

module.exports = () => {
  const fn = file => zip => {
    const input = zip ? _.chunk([].concat(..._.zip(...data(file))), 3) : data(file);
    return sort(input, (a, b) => a - b).filter(([a, b, c]) => (a + b > c)).length;
  };

  test(fn('test')(), 2);
  test(fn('test')(true), 3);

  return {
    one: fn()(),
    two: fn()(true)
  };
};
