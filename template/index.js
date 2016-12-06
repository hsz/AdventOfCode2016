import { input, test } from '../utils';

const data = file => input().split('\n').map(v => v);

module.exports = function () {

  const fn = file => () => {
    const input = data(file);
  };

  test(fn('test')(), );

  return {
    one: fn(),
    two: fn()
  };
};
