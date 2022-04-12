const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const app = express();
app.use(bodyParser.json());

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
 ];

 app.get('/validateToken', (req, res) => {
   const token = req.headers.authorization;
   if (token.length !== 16) return res.status(401).json({message: 'Invalid token!'});
   res.status(200).json({message: 'Valid token!'})
 })

 app.get('/recipes', (req, res) => {
   res.status(200).json(recipes);
 })

app.post('/recipes', (req, res) => {
  const { id, name, price } = req.body;
  recipes.push({ id, name, price });
  res.status(201).json({ message: 'Recipe created successfully!' });
});

fetch(`http://localhost:3000/recipes/`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    id: 4,
    name: 'Macarrão com Frango',
    price: 30
  })
});


app.listen(3000, () => {
  console.log('Aplicativo ouvindo na porta 3000')
});