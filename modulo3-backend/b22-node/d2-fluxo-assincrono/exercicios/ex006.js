// Crie um script que mostre na tela o conteúdo de um arquivo escolhido pela pessoa usuária:

const fs = require('fs').promises;
const readline = require('readline-sync');

async function choseFile() {
  const file = readline.question('Escreva o nome do arquivo que deseja ler: ');
  fs.readFile(file, 'utf8')
    .then((result) => {
      console.log('Sucesso!')
      console.log(result);
    })
    .catch(error => console.log(`Erro: Arquivo inexisente!`))
}

choseFile();