const validUsers = [
  { username: 'MestreCuca', password: 'MinhaSenhaSuperSeguraSqn' },
  { username: 'McRonald', password: 'Senha123Mudar' },
  { username: 'Burger Queen', password: 'Senha123Mudar' },
  { username: 'UpWay', password: 'Senha123Mudar' },
];

const authMiddleWare = (req, res, next) => {
  const { username, password } = req.headers;
  if (!username || !password) return res.status(401).json({ message: "Username or password can't be blank" });

  const foundUser = validUsers.find((e) => e.username === username);
  if (!foundUser) return res.status(401).json({ message: 'Invalid credencials! '});

  if (!(username === foundUser.username && password === foundUser.password)) {
    return res.status(401).json({ message: 'Invalid credencials! '});
  }

  req.user = foundUser;

  next();
}

module.exports = authMiddleWare;
