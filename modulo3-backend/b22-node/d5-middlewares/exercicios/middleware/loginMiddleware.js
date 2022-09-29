const randomToken = require('random-token').create('abcdefghijklmnopqrstuvwxzyABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*()');

module.exports = (req, res, next) => {
  const { email, password } = req.body;
  if (
    email.includes ('@' && '.com') &&
    email.length > 6 &&
    password.toString().length >= 4 && password.toString().length <= 8) {
      return res.status(200).json({ token: randomToken(12) });
    }
  next();
}