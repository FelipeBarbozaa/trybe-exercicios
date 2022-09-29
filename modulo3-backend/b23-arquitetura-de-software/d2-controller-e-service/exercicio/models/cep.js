const connection = require('./connection');

const getAllCep = async (cep) => {
  const [result] = await connection.execute('SELECT * FROM ceps')
  return result;
}

const findByCep = async (cep) => {
  const [result] = await connection.execute('SELECT * FROM ceps')
  const find = result.find((e) => e.cep === cep);
  return find;
}

const create = async (cep, logradouro, bairro, localidade, uf) => {
  await connection.execute('INSERT INTO ceps VALUES (?, ?, ?, ?, ?)', [cep, logradouro, bairro, localidade, uf])
}

module.exports = {
  getAllCep,
  findByCep,
  create,
}