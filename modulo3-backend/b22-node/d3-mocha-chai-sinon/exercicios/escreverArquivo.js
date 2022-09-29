const fs = require('fs')

function escreverArquivo(arquivo, texto) {
  try {
    fs.writeFileSync(arquivo, texto);
    return 'ok';
  } catch (error) {
    return error;
  }
}

escreverArquivo('./teste.txt', 'testando');

module.exports = escreverArquivo;