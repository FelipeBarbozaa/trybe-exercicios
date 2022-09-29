const express = require('express');
const bodyParser = require('body-parser');
const { controllerGetCep, controllerCreateCep} = require('./controllers/cep')
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());

app.get('/ping', (_req, res) => res.status(200).json({ message: 'pong!' }));

app.get('/cep/:cep', controllerGetCep);
app.post('/cep', controllerCreateCep);

app.use((err, _req, res, _next) => {
  res.status(500).json(err);
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`))