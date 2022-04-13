const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const checkRegister = require('./middleware/registerMiddleWare');
const checkLogin = require('./middleware/loginMiddleware');

app.post('/user/register', checkRegister, (_req, res) => {
  return res.status(400).json({ message: 'invalid data' })
})

app.post('/user/login', checkLogin, (_req, res) => {
  return res.status(400).json({ message: 'email or password is incorrect! '});
})

app.listen(3000, () => console.log('Listening on 3000! '));
