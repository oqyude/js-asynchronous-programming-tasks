import fsp from 'fs/promises';

// BEGIN
const getType = (filepath) => fsp.stat(filepath)
  .then((stat) => (stat.isDirectory() ? 'directory' : 'file'))
  .catch(() => null);

export const getTypes = (filepaths) => Promise.all(filepaths.map(getType));
// END
