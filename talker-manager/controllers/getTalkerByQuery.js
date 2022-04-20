const fs = require('fs').promises;

module.exports = async (req, res) => {
  const { q } = req.query;
  const file = await fs.readFile('./talker.json', 'utf8');
  if (!q || q === '') return res.status(200).end();
  const filter = JSON.parse(file).filter((e) => e.name.includes(q));
  return res.status(200).json(filter);
};
