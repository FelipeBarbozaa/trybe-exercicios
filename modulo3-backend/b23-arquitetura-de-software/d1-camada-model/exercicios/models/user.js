const connection = require('./connection');
const md5 = require('md5')

const getEmail = async () => {
  const [uniques] = await connection.execute('SELECT email FROM authors');
  return uniques;
};

const getUserById = async (id) => {
  const [user] = await connection.execute('SELECT * FROM authors;');
  const findUser = user.find((e) => e.id === parseInt(id));
  return findUser;
}

const isValid = async (email) => {
  const result = await getEmail();
  const checkEmail = result.find((e) => e.email === email)
  if (checkEmail === undefined) return false;
  return true;
}

const createUser = async (firstName, lastName, email, password) => {
  await connection.execute('INSERT INTO model_example.authors (first_name, last_name, email, password) VALUES (?, ?, ?, ?)', [firstName, lastName, email, md5(password)]);
}

module.exports = {
  getEmail,
  isValid,
  createUser,
  getUserById,
}