const randomToken = require('random-token');

module.exports = (_req, res) => {
  res.status(200).json({ token: randomToken(16) });
};