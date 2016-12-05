import _ from 'lodash';
import { input, test, sort } from '../utils';

const data = file => input(file).split('\n').map(v => v.replace(/-/g, '').match(/([a-z]+)(\d+)\[([a-z]+)]/).splice(1));

module.exports = () => {
  const clear = file => data(file).filter(([name, id, sum]) => _.flatten(sort(_.invertBy(_.countBy(name))).reverse()).slice(0, 5).join('') === sum);
  const rot = (text, r) =>  text.replace(/[a-zA-Z]/g, c => String.fromCharCode((c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) + r) ? c : c - 26));


  const fn = file => () => clear(file).reduce((r, [, id]) => r + +id, 0);
  const fn2 = file => f => clear(file).find(([name, id]) => rot(name, id % 26) === f)[1];

  test(fn('test')(), 1514);
  test(fn2('test2')('veryencryptedname'), 343);

  return {
    one: fn()(),
    two: fn2()('northpoleobjectstorage')
  };
};
