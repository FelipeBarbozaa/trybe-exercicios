const connection = require('./connection');

const create = async ({ title, directedBy, releaseYear }) => {
  const [result] = await connection
    .execute(
      "INSERT INTO model_example.movies (title, directed_by, release_year) VALUES (?, ?, ?)",
      [title, directedBy, releaseYear]
    );

  return {
    id: result.insertId,
  };
};

const getById = async (id) => {
  const [result] = await connection
  .execute(
    'SELECT movies FROM model_example WHERE id = ?',
    [id]
  );
  if (result.length === 0) {
    return false;
  }
  return result;
}

module.exports = {
  create,
  getById,
};