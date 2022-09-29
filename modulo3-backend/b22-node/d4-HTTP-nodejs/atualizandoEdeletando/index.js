const express = require('express');
const bodyParser = require('body-parser');
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

app.get('/drinks/:id', (req,res ) => {
  const { id } = req.params;
  const drinksFiltred = drinks.find((e) => e.id === parseInt(id));
  if (!drinksFiltred) return res.status(404).json({ message: 'Drink not found!' });
  return res.status(200).json(drinksFiltred);
});

app.put('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const filterIndex = drinks.findIndex((e) => e.id === parseInt(id));
  if (filterIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });
  drinks[filterIndex] = { ...drinks[filterIndex], name, price };
  return res.status(204).end();
})

app.delete('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const filterIndex = drinks.findIndex((e) => e.id === parseInt(id));
  if (filterIndex === -1) return res.status(404).json({ message: 'Drink not found!' });
  drinks.splice(filterIndex, 1)
  return res.status(204).end();
})

app.get('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const recipesFiltred = recipes.find((e) => e.id === parseInt(id));
  if (!recipesFiltred) return res.status(404).json({ message: 'Recipe not found!' })
  return res.status(200).json(recipesFiltred);
})

app.put('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));
  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });
  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };
  return res.status(204).end();
});

app.delete('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((e) => e.id === parseInt(id));
  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!'});
  recipes.splice(recipeIndex, 1);
  return res.status(204).end();
})

app.listen(3000, () => {
  console.log('Ouvindo a porta 3000')
})