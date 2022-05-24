const express = require('express');
const { getAllController, getByIdController, createBookController } = require('./controllers/booksController');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.get('/books', getAllController);
app.get('/books/:id', getByIdController);
app.post('/books', createBookController);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));