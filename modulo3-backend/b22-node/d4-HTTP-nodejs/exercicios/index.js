const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

app.get('/ping', (req, res) => {
  return res.status(200).json({ message: 'pong' });
})

app.post('/hello', (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(404).json({ message: 'Error, name not found!' });
  return res.status(200).json({ message: `Hello, ${name}!` });
})

app.listen(3000, () => {
  console.log('Ouvindo na porta 3000');
});
