const fs = require('fs').promises;

module.exports = async (_req, res) => {
    const file = await fs.readFile('./talker.json', 'utf8');
    if (!file) return res.status(200).json({ });
    res.status(200).json(JSON.parse(file));
};
