// Crie uma função que lê e escreve vários arquivos ao mesmo tempo.

const fs = require('fs').promises;

async function arrayToFile() {
  const strings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

  const createFilePromises = strings.map((string, index) => {
    fs.writeFile(`./file${index + 1}.txt`, string)
  });
  
  const fileNames = [
    'file1.txt',
    'file2.txt',
    'file3.txt',
    'file4.txt',
    'file5.txt',
  ];

  const fileContents = await Promise.all(
    fileNames.map((fileName) => fs.readFile(fileName, 'utf8'))
  );

  const allFiles = fileContents.join(' ');
  await fs.writeFile('./allFiles.txt', allFiles)
}

arrayToFile(

)