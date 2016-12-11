import _ from 'lodash';
import { input, test } from '../utils';

const data = file => input(file).split('\n').reduce((r, v) => {
  const [m, b, a1, a2, b1, b2] = v.match(/\d+|bot|out/g), c = _.isNaN(+m), k = c ? b : a1;
  return r.bot[k] = (r.bot[k] || {v: [], x: []}), r.bot[k][c ? 'x': 'v'].push(...(c ? [[a1, a2], [b1, b2]] : [+m])), r;
}, {bot: [], out: []});

module.exports = () => {
  const fn = file => (find, input = data(file), more = 0) => {
    do { input.bot.map((val, b) => {
      const {v, x} = val || {};
      if (v.length === 2 && ++more && (val.v = []))
        _.intersection(v, find).length === 2 && (input.found = b),
        x.map(([a1, a2], k) => (input[a1][a2] = (input[a1][a2] || {v: []})).v.push(_.over([Math.min, Math.max])(...v)[k]));
      return val;
    }); } while (more > 0 && !(more = 0));
    return input;
  };

  const fn2 = file => Object.values(fn(file)().out).slice(0, 3).reduce((r, {v}) => r * v[0], 1);

  test(fn('test')([5, 2]).found, 2);
  test(fn2('test'), 30);

  return {
    one: fn()([17, 61]).found,
    two: fn2()
  };
};
