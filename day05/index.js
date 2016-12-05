import md5 from 'md5';
import { test } from '../utils';

module.exports = () => {
  const fn = (id, d, i = 0, p = [], h) => {
    while ((h = md5(id + i++)) && p.join('').length < 8) {
      !h.indexOf('00000') && (!d ? p[p.length] = h[5] : h[5] < 8 && !p[h[5]] && (p[h[5]] = h[6]));
    } return p.join('');
  };

  test(fn('abc'), '18f47a30');
  test(fn('abc', true), '05ace8e3');

  return {
    one: fn('ojvtpuvg'),
    two: fn('ojvtpuvg', true)
  };
};
