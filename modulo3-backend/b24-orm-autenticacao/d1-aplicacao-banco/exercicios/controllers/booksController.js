const { getAllServices, getByIdServices, createBookServices } = require('../services/booksService')

const getAllController = async (req, res) => {
  const result = await getAllServices();
  return res.status(200).json(result);
}

const getByIdController = async (req, res) => {
  const { id } = req.params;
  const result = await getByIdServices(id);
  if (result) {
    return res.status(200).json(result);
  }
  return res.status(404).json({ message: 'Book not found'})
}

const createBookController = async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  const result = await createBookServices(title, author, pageQuantity);
  console.log(result);
}

module.exports = {
  getAllController,
  getByIdController,
  createBookController,
}
