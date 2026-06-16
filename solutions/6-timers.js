import fs from 'fs';

// BEGIN
const watch = (filepath, interval, callback) => {
  let lastMtime = null;

  const id = setInterval(() => {
    fs.stat(filepath, (error, stats) => {
      if (error) {
        callback(error);
        return;
      }

      if (lastMtime === null) {
        lastMtime = stats.mtimeMs;
        return;
      }

      if (stats.mtimeMs > lastMtime) {
        lastMtime = stats.mtimeMs;
        callback(null);
      }
    });
  }, interval);

  return id;
};

export default watch;
// END
