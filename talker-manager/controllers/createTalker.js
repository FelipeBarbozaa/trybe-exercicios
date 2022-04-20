const fs = require('fs').promises;

module.exports = async (req, res) => {
  const { name, age, talk } = req.body;
  const file = await fs.readFile('./talker.json', 'utf8');
  const newId = JSON.parse(file).length + 1;
  const newFile = JSON.parse(file);
  const newTalker = { id: newId, name, age, talk };
  newFile.push(newTalker);

  await fs.writeFile('./talker.json', JSON.stringify(newFile));
  return res.status(201).json(newTalker);
};
