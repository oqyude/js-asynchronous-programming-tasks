import fsp from 'fs/promises';

// BEGIN
export const touch = (filepath) => fsp.open(filepath, 'a').then((fileHandle) => fileHandle.close());
// END
