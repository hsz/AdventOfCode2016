import _ from 'lodash';
import {input, test} from '../utils';

const data = file => input(file).split('\n').map(v => v.split(/\[|]/).reduce((r, v, k) => { r[k % 2].push(v); return r; }, [[], []]));

module.exports = () => {
  const a = [/(\w)(\w)(?!\1)\2(?!\2)\1/g, (a, b) => a.length && !b.length];
  const b = [/(\w)(\w)(?!\2)\1/g, (a, b) => _.intersection(a.map(([l, c]) => `${c}${l}${c}`), b).length];

  const fn = file => ([reg, fun]) => data(file).filter(([out, ins]) => {
    const f = (v, m, x, ms = []) => { while (m = reg.exec(v)) { ms.push(m[0]), reg.lastIndex = m.index + 1; } return ms; };
    return fun(_.flatten(out.map(f)), _.flatten(ins.map(f)));
  }).length;

  test(fn('test')(a), 2);
  test(fn('test2')(b), 3);

  return {
    one: fn()(a),
    two: fn()(b)
  };
};
