module.exports = (req, res, next) => {
  const { username, email, password } = req.body;
  if (!(username && email && password)) return res.status(400).json({ mesasge: 'invalid data' });
  if (
    username.length > 3 &&
    email.includes ('@' && '.com') &&
    email.length > 6 &&
    password.toString().length >= 4 && password.toString().length <= 8
  ) {
    return res.status(201).json({ message: 'user created'})
  }
  next();
}