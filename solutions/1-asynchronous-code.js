import fs from 'fs';

// BEGIN
const print = (filepath) => {
  fs.readFile(filepath, 'utf-8', (_error, data) => {
    console.log(data);
  });
};

export default print;
// END
