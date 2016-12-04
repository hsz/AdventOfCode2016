import fs from 'fs';
import _ from 'lodash';
export { equal as test } from 'assert';

export const input = (filename = 'input') => {
  return fs.readFileSync(`${filename}.txt`, 'utf8').trim();
};

export const sort = (data, fn) => _.cloneDeep(data).map(a => a.sort(fn));
