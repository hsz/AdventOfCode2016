import { input, test } from '../utils';

const data = file => input(file).split('\n').map(v => v.split(''));

module.exports = () => {
  const map = {U: {y: -1}, D: {y: 1}, L: {x: -1}, R: {x: 1}};
  const move = (g, p, {x = 0, y = 0}) => (g[p.y + y] || [])[p.x + x] && [p.x += x, p.y += y];
  const fn = file => (p, g) => data(file).reduce((s, r) => r.map(c => move(g, p, map[c])) && 0 || `${s}${g[p.y][p.x].toString(16)}`, '');
  const grid = { a: [[1, 2, 3], [4, 5, 6], [7, 8, 9]], b: [[0, 0, 1, 0, 0], [0, 2, 3, 4, 0], [5, 6, 7, 8, 9], [0, 10, 11, 12, 0], [0, 0, 13, 0, 0]] };

  test(fn('test')({x: 1, y: 1}, grid.a), 1985);
  test(fn('test')({x: 0, y: 2}, grid.b), '5db3');

  return {
    one: fn()({x: 1, y: 1}, grid.a),
    two: fn()({x: 0, y: 2}, grid.b)
  };
};
