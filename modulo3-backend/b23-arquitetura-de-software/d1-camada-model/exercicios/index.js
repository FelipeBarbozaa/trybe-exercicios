const express = require('express')
const bodyParser = require('body-parser');
const app = express()
app.use(bodyParser.json());
const port = 3002

const user = require('./models/user');

app.post('/user', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  if (!firstName || firstName === '') return res.status(401).json({ message: 'firstName não pode ser vázio! '});
  if (!lastName || firstName === '') return res.status(401).json({ message: 'lastName não pode ser vázio! '});
  if (!email.includes('@' && '.com')) return res.status(401).json({ message: 'email inválido!'});
  if (!password) return res.status(401).json({ message: 'Precisa de uma senha!'});
  if (password.length < 7 || typeof password !== 'string') res.status(401).json({ message: 'Senha inválida!'});
  if (user.isValid()) res.status(401).json({ messagE: 'Email já existe! '});
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))