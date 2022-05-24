const { Book } = require('../models');

const getAllServices = async () => {
  const [{ dataValues }] = await Book.findAll();
  return dataValues;
}

const getByIdServices = async (id) => {
  const dataValues = await Book.findByPk(id);
  return dataValues;
}

const createBookServices = async (title, author, pageQuantity) => {
  const create = await Book.create({ title, author, pageQuantity })
  console.log(create);
}
 
module.exports = {
  getAllServices,
  getByIdServices,
  createBookServices,
}