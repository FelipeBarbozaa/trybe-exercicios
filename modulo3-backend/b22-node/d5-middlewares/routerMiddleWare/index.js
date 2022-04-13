/* index.js */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());


const recipesRouter = require('./recipesRouter');

const checkName = (req, res, next) => {
  const { name } = req.headers;
  if (!name) return res.status(401).json({ message: 'Acesso negado!' });
  next();
}

/* Todas as rotas com /recipes/<alguma-coisa> entram aqui e vão para o roteador. */
app.use('/recipes', checkName, recipesRouter);

// app.all('*', function (req, res) {
//  return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
// });

app.listen(3001, () => { console.log('Ouvindo na porta 3001'); });