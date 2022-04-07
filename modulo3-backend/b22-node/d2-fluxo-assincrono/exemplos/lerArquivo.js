const fs = require('fs');

function readFile(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, content) => {
      if (err) return reject(err)
      resolve(content)
    });
  });
}

readFile('./file1.txt')
  .then((content) => {
    console.log(`Primeiro arquivo lido: ${content.byteLength} bytes`);
    return readFile('./file2.txt');
  })
  .then((content) => {
    console.log(`Segundo arquivo lido: ${content.byteLength} bytes`);
    return readFile('./file3.txt');
  })
  .then((content) => {
    console.log(`terceiro arquivo lido: ${content.byteLength} bytes`)
  })
  .catch((err) => console.error(err.message));