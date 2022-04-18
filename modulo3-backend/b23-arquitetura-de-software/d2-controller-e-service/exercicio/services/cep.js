const { findByCep, create } = require('../models/cep');

const getCep = async (cep) => {
  const regex = /\d{5}-?\d{3}/;
  const result = regex.test(cep);
  if (!result) return ({ "error": { "status": "invalidData", "message": "CEP inválido" }})
  if (cep.includes('-') && cep.length > 9) return ({ "error": { "status": "invalidData", "message": "CEP muito grande!" }})
  if (!(cep.includes('-')) && cep.length > 8) return ({ "error": { "status": "invalidData", "message": "CEP muito grande!" }})
  const resultSearch = await findByCep(cep);
  if (!resultSearch) return ({ "error": { "code": "notFound", "message": "CEP não encontrado" } })
  return resultSearch;
}

const createCep = async (cep, logradouro, bairro, localidade, uf) => {
  const resultSearch = await findByCep(cep, logradouro, bairro, localidade, uf);
  if (resultSearch) return ({ "error": { "status": "alreadyExists", "message": "CEP já existente" }})
  await create(cep, logradouro, bairro, localidade, uf)
  return {};
}

module.exports = {
  getCep,
  createCep,
}