import fsp from 'fs/promises';

// BEGIN
export const reverse = (filepath) => fsp.readFile(filepath, 'utf-8')
  .then((data) => data.split('\n').reverse().join('\n'))
  .then((reversed) => fsp.writeFile(filepath, reversed));
// END
