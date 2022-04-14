const connection = require('./connection');
const author = require()

const getAll = async () => {
  const [books] = await connection.execute('SELECT * FROM books');
  return books;
}

const getById = async (id) => {
  const [book] = await connection.execute('SELECT * FROM books WHERE id = ?', [id]);
  if (book.length === 0) return null
  return book;
}

const isValid = (title, author_id) => {
  if (!title || typeof title !== 'string' || title.length < 3) return false;
  if (!author_id || typeof author_id !== 'number' || !(getById(author_id))) return false;
  return true; 
};

const createBook = async (title, author_id) => {
  connection.execute(
    'INSERT INTO model_example.books (title, author_id) VALUES (?, ?)', [title, author_id]);
}

module.exports = {
  getAll,
  getById,
  isValid,
  createBook,
}