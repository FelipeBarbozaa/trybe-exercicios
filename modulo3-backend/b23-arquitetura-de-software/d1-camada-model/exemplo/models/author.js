const connection = require('./connection');

const serialize = (data) => {
  return {
    id: data.id,
    firstName: data.first_name,
    middleName: data.middle_name,
    lastName: data.last_name,
  }
}

const getAll = async () => {
  const [authors] = await connection.execute('SELECT id, first_name, middle_name, last_name FROM authors');
  // Pega o primeiro array e joga na variavel authors
  return authors.map(serialize)
}

module.exports = {
  getAll,
}
