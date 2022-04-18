const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.get('/ping', (req, res) => res.status(200).json({ message: 'pong!' }));

app.get('/cep:cep', (req, res) => {
  
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`))