import _ from 'lodash';
import { input, test } from '../utils';

const data = file => input(file).split('\n').map(v => v.split(''));

module.exports = () => {

  const fn = file => p => _.zip(...data(file)).reduce((r, c) => `${r}${_.flatten(Object.values(_.invertBy(_.countBy(c))).splice(p, 1))}`, '');

  test(fn('test')(-1), 'easter');
  test(fn('test')(0), 'advent');

  return {
    one: fn()(-1),
    two: fn()(0)
  };
};
