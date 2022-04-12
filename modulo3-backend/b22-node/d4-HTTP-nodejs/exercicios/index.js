const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');
app.use(bodyParser.json());

app.get('/ping', (req, res) => {
  return res.status(200).json({ message: 'pong' });
})

app.post('/hello', (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(404).json({ message: 'Error, name not found!' });
  return res.status(200).json({ message: `Hello, ${name}!` });
})

app.post('/greeting', (req, res) => {
  const { name, age } = req.body;
  if (age < 18) return res.status(401).json({ message: 'Unauthorized' });
  return res.status(200).json({ message: `Hello, ${name}!`}) 
})

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  return res.status(200).json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
})

app.get('/simpsons', (req,res) => {
  const simpsons = fs.readFileSync('./simpsons.json', 'utf8')
  res.status(200).json(JSON.parse(simpsons));
})

app.get('/simpsons/:id', (req, res) => {
  const { id } = req.params;
  const simpsons = fs.readFileSync('./simpsons.json', 'utf8');
  const character = JSON.parse(simpsons).find((e) => e.id == id);
  if (!character) return res.status(404).json({ message: 'Character not found! '});
  res.status(200).json(character);
})

app.listen(3000, () => {
  console.log('Ouvindo na porta 3000');
});
