import _ from 'lodash';
import { input } from '../utils';

module.exports = () => {
  const input = input().split(', ').map(([k, ...v]) => [k === 'R' ? 1 : -1, +v.join('')]);
  const sum = ([x, y]) => Math.abs(x) + Math.abs(y);
  const fn = (back, map = [[0, 0]]) => sum((() => {
    for (let [sign, val] of input) {
      let [x, y] = map[map.length - 1];
      for (let i = 1; i <= val; i++) {
        if (_.findIndex(map, [x += sign, y]) > 0 && back) return [x, y];
        map.push([x, y]);
      }
      map.map(([x, y], k) => map[k] = [sign * -y, sign * x]);
    }
    return map.pop();
  })());

  return {
    one: fn(),
    two: fn(true)
  };
};
