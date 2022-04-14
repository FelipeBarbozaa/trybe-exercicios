const express = require('express')
const app = express()
const port = 3001

const author = require('./models/author'); 
const book = require('./models/book');

app.get('/authors', async (_req, res) => {
  const authors = await author.getAll();
  res.status(200).json(authors);
})

app.get('/books', async (req, res) => {
  const books = await book.getAll();
  res.status(200).json(books);
})

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const bookById = await book.getById(id);
  if (!bookById) return res.status(404).json({ message: 'Not found!'});
  res.status(200).json(bookById);
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

