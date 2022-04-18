const { getCep, createCep } = require('../services/cep')
const rescue = require('express-rescue');

const controllerGetCep = rescue(async (req, res, next) => {
  const { cep } = req.params;
  const result = await getCep(cep)
  if (result.error) {
    return next(result)
  }
  return res.status(200).json(result);
});

const controllerCreateCep = rescue(async (req, res, next) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;
  const result = await createCep(cep, logradouro, bairro, localidade, uf);
  if (result.error) {
    return next(result)
  }
  return res.status(200).json({ message: 'created succesfully! '});
})

module.exports = {
  controllerGetCep,
  controllerCreateCep,
}