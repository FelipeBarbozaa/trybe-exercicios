const connection = require('./connection');

const getEmail = async () => {
  const [uniques] = await connection.execute('SELECT email FROM authors');
  return uniques;
};

const isValid = async (email) => {
  const result = await getEmail();
  const checkEmail = result.find((e) => e.email === email)
  if (checkEmail) return true;
  return false;
}

const createUser = async () => {
  
}

module.exports = {
  getEmail,
  isValid,
}