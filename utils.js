import fs from 'fs';

export const input = (filename = 'input') => {
  return fs.readFileSync(`${filename}.txt`, 'utf8').trim();
};
