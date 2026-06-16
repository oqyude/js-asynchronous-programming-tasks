import path from 'path';
import fs from 'fs';
import async from 'async';

// BEGIN
export const getDirectorySize = (dirpath, callback) => {
  fs.readdir(dirpath, (readDirError, filenames) => {
    if (readDirError) {
      callback(readDirError);
      return;
    }

    const filepaths = filenames.map((filename) => path.join(dirpath, filename));
    async.map(filepaths, fs.stat, (statError, stats) => {
      if (statError) {
        callback(statError);
        return;
      }

      let size = 0;

      stats.forEach((stat) => {
        if (stat.isFile()) {
          size += stat.size;
        }
      });

      callback(null, size);
    });
  });
};
// END
