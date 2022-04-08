const fs = require('fs').promises;

Promise.all([
  fs.writeFile('./arquivo1.txt', 'Finalmente '),
  fs.writeFile('./arquivo2.txt', 'Estou '),
  fs.writeFile('./arquivo3.txt', 'Usando '),
  fs.writeFile('./arquivo4.txt', 'Promise all'),
])
  .then(() => {
    Promise.all([
      fs.readFile('./arquivo1.txt', 'utf8'),
      fs.readFile('./arquivo2.txt', 'utf8'),
      fs.readFile('./arquivo3.txt', 'utf8'),
      fs.readFile('./arquivo4.txt', 'utf8'),
    ])
    .then(([file1, file2, file3, file4]) => {
      const allFiles = (file1 + file2 + file3 + file4)
      fs.writeFile('./allFiles.txt', allFiles);
      console.log('Script executado com sucesso!')
    })
  })
  .catch(error => console.log(error))