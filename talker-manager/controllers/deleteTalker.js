const fs = require('fs').promises;

module.exports = async (req, res) => {
  const { id } = req.params;

  const file = await fs.readFile('./talker.json', 'utf8');
  const fileObject = JSON.parse(file);
  
  const indice = fileObject.findIndex((e) => e.id === parseInt(id, 0));
  fileObject.splice(indice, 1);

  await fs.writeFile('./talker.json', JSON.stringify(fileObject));
  return res.status(204).end();
};
