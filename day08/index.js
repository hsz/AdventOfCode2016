import _ from 'lodash';
import { input, test } from '../utils';

const data = file => input(file).split('\n').map(v => [v.match(/rec|col|row/)[0], ...v.match(/\d+/g)]);

module.exports = () => {
  const fn = file => (w, h, l) => {
    const ar = _.range(h).map(v => _.range(w).map(v => ' '));
    data(file).map(([op, a, b]) => ({
      rec: () => ar.map((row, x) => x < b && _.fill(row, '#', 0, a)),
      col: () => ar.map(row => row[a]).map((v, k) => ar[(k + +b) % h][a] = v),
      row: () => _.clone(ar[a]).map((v, k) => ar[a][(k + +b) % w] = v)
    })[op]());
    return l ? `\n${ar.join('\n')}`.replace(/,/g, '') : _.flatten(ar).filter(v => v == '#').length;
  };

  test(fn('test')(7, 3), 6);

  return {
    one: fn()(50, 6),
    two: fn()(50, 6, true),
  };
};
