const fs = require('fs');

function leArquivo(nomeDoArquivo) {
  try {
    const conteudo = fs.readFileSync(nomeDoArquivo, 'utf8');
    return conteudo;
  } catch (err) {
    return null;
  }
} 


module.exports = leArquivo;