const MoviesService = require('../services/movieService');

const create = async (req, res) => {
  const { title, directedBy, releaseYear } = req.body;

  const movie = await MoviesService
    .create({ title, directedBy, releaseYear });

  if (!movie) {
    return res
      .status(400)
      .json({ message: 'Dados inválidos' });
   }

  res
    .status(201)
    .json({ message: 'Filme criado com sucesso!' });
};

const getById = async(req, res) => {
  const { id } = req.params;

  const result = await MoviesService.getById(id);
  if (!result) {
    return res.status(404).json({ message: 'Not found'});
  }
  return res.status(200).json(result);

}

module.exports = {
  create,
  getById
};