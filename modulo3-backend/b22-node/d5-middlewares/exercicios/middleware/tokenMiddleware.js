module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'Empty token! '});
  if (token.length !== 12) return res.status(401).json({ message: 'Invalid token! '});
  next();
}