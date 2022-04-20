const fs = require('fs').promises;

module.exports = async (req, res) => {
  const { id } = req.params;
  const { name, age, talk } = req.body;

  const file = await fs.readFile('./talker.json', 'utf8');
  const fileObject = JSON.parse(file);
  
  const findIndice = fileObject.findIndex((e) => e.id === parseInt(id, 0));
  if (findIndice === -1) return res.status(400).end();

  const talker = { id: JSON.parse(id), name, age, talk };
  fileObject[findIndice] = talker;

  await fs.writeFile('./talker.json', JSON.stringify(fileObject));
  return res.status(200).json(talker);
};
