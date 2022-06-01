const express = require('express');

const app = express();
const message = process.env.MESSAGE || 'Está vivo!!!';
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(message)
});


app.listen(port);
console.log(`Escutando na porta ${port}`);