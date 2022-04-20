const fs = require('fs').promises;

module.exports = async (req, res) => {
  const { id } = req.params;
  const file = await fs.readFile('./talker.json', 'utf8');
  const filterTalker = JSON.parse(file).find((e) => e.id === parseInt(id, 0));
  if (!filterTalker) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  res.status(200).json(filterTalker);
};
