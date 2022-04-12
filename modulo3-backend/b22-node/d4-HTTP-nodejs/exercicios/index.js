const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');
const crypto = require('crypto');
app.use(bodyParser.json());

function generateToken() {
  return crypto.randomBytes(8).toString('hex');
}

app.get('/ping', (req, res) => {
  return res.status(200).json({ message: 'pong' });
})

app.post('/hello', (req, res) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'Token invalido! '})
  if (authorization.length !== 16) return res.status(401).json({ message: 'Token invalido! '})
  const { name } = req.body;
  if (!name) return res.status(404).json({ message: 'Error, name not found!' });
  return res.status(200).json({ message: `Hello, ${name}!` });
})

app.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body;
  if(!email || !password || !firstName || !phone) return res.status(401).json({ message: 'Missing fields' })
  return res.status(200).json({ token: generateToken() });
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
  try {
    const simpsons = fs.readFileSync('./simpsons.json', 'utf8')
    res.status(200).json(JSON.parse(simpsons));
  } catch (e) {
    res.status(500).json({ Error: e.message });
  }
})

app.get('/simpsons/:id', (req, res) => {
  const { id } = req.params;
  const simpsons = fs.readFileSync('./simpsons.json', 'utf8');
  const character = JSON.parse(simpsons).find((e) => e.id == id);
  if (!character) return res.status(404).json({ message: 'Character not found! '});
  res.status(200).json(character);
})

app.post('/simpsons', (req, res) => {
  const { id, name } = req.body;
  const simpsons = fs.readFileSync('./simpsons.json', 'utf8');
  const checkId = JSON.parse(simpsons).find((e) => e.id == id);
  if (checkId) return res.status(409).json({ message: 'id already exists' });
  const obj = JSON.parse(simpsons);
  obj.push({ id, name })
  fs.writeFileSync('./simpsons.json', JSON.stringify(obj));
  return res.status(204).end();
})

app.listen(3000, () => {
  console.log('Ouvindo na porta 3000');
});
