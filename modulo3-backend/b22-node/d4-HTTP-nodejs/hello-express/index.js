const express = require('express');

const app = express(); // cria uma nova aplicação express 

app.get('/hello', (req, res) => {
  res.status(200).send('Olá mundoooooo!')
}); // Diz que quando uma
// requisição com método GET for recebida no caminho /hello ,
// a função handleHelloWorldRequest deve ser chamada;

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001')
}) // Pede ao Express que crie um servidor HTTP e escute
// por requisições na porta 3001;
