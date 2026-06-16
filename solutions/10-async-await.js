import fsp from 'fs/promises';

// BEGIN
export const exchange = async (filepath1, filepath2) => {
  const [data1, data2] = await Promise.all([
    fsp.readFile(filepath1, 'utf-8'),
    fsp.readFile(filepath2, 'utf-8'),
  ]);

  await Promise.all([
    fsp.writeFile(filepath1, data2),
    fsp.writeFile(filepath2, data1),
  ]);
};
// END
