import { input } from '../utils';

module.exports = () => {
  const input = input().split('\n').map(v => v.split(''));
  const map = {U: {y: -1}, D: {y: 1}, L: {x: -1}, R: {x: 1}};
  const move = (g, p, {x = 0, y = 0}) => (g[p.y + y] || [])[p.x + x] && [p.x += x, p.y += y];
  const fn = (p, g) => input.reduce((s, r) => r.map(c => move(g, p, map[c])) && 0 || `${s}${g[p.y][p.x].toString(16)}`, '');

  return {
    one: fn({x: 1, y: 1}, [[1, 2, 3], [4, 5, 6], [7, 8, 9]]),
    two: fn({x: 0, y: 2}, [[0, 0, 1, 0, 0], [0, 2, 3, 4, 0], [5, 6, 7, 8, 9], [0, 10, 11, 12, 0], [0, 0, 13, 0, 0]])
  };
};
