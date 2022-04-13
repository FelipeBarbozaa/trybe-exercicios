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

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];


 app.get('/validateToken', (req, res) => {
   const token = req.headers.authorization;
   if (token.length !== 16) return res.status(401).json({message: 'Invalid token!'});
   res.status(200).json({message: 'Valid token!'})
 })

 app.get('/recipes', (req, res) => {
   res.status(200).json(recipes);
 })

 app.get('/drinks', (req, res) => {
  res.status(200).json(drinks);
})

app.post('/recipes', (req, res) => {
  const { id, name, price, waitTime } = req.body;
  recipes.push({ id, name, price, waitTime });
  res.status(201).json({ message: 'Recipe created successfully!' });
});


app.post('/drinks', (req, res) => {
  const { id, name, price } = req.body;
  drinks.push({ id, name, price });
  res.status(201).json({ message: 'Recipe created successfully! '});
})

fetch(`http://localhost:3000/recipes/`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    id: 10,
    name: 'Macarrão com Frango',
    price: 30
  })
});


app.listen(3000, () => {
  console.log('Aplicativo ouvindo na porta 3000')
});