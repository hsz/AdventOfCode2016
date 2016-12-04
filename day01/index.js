import _ from 'lodash';
import { input, test } from '../utils';

const data = file => input(file).split(', ').map(([k, ...v]) => [k === 'R' ? 1 : -1, +v.join('')]);

module.exports = () => {
  const sum = ([x, y]) => Math.abs(x) + Math.abs(y);

  const fn = file => (back, map = [[0, 0]]) => sum((() => {
    for (let [sign, val] of data(file)) {
      let [x, y] = map[map.length - 1];
      for (let i = 1; i <= val; i++) {
        if (_.findIndex(map, [x += sign, y]) > 0 && back) return [x, y];
        map.push([x, y]);
      }
      map.map(([x, y], k) => map[k] = [sign * -y, sign * x]);
    }
    return map.pop();
  })());

  test(fn('test11')(), 5);
  test(fn('test12')(), 2);
  test(fn('test13')(), 12);
  test(fn('test2')(true), 4);

  return {
    one: fn()(),
    two: fn()(true)
  };
};
