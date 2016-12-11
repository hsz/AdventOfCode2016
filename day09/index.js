import { input, test } from '../utils';

module.exports = () => {
  const fn = file => (z, r = /\((\d+)x(\d+)\)/g, s = 0, v = input(file).trim(), m) => {
    do {
      let o = '', i = 0; r.lastIndex = 0;
      while (m = r.exec(v)) {
        (o += v.substring(i, m.index) + v.substr(r.lastIndex, m[1]).repeat(m[2])), (r.lastIndex = i = m.index + m[0].length + +m[1]);
        if (z && !(r.lastIndex = 0)) break;
      } s += (o += v.substr(i)).length - (v = o.replace(/^\w+/, '')).length;
    } while (z && r.test(v));
    return s + v.length;
  };

  test(fn('test11')(), 6);
  test(fn('test12')(), 7);
  test(fn('test13')(), 9);
  test(fn('test14')(), 11);
  test(fn('test15')(), 6);
  test(fn('test16')(), 18);
  test(fn('test21')(2), 9);
  test(fn('test22')(2), 20);
  test(fn('test23')(2), 241920);
  test(fn('test24')(2), 445);

  return {
    one: fn()(),
    two: fn()(2)
  };
};
