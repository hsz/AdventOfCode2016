import fs from 'fs';
export { equal as test } from 'assert';

export const input = (filename = 'input') => {
  return fs.readFileSync(`${filename}.txt`, 'utf8').trim();
};
