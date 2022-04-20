const express = require("express");
const bodyParser = require('body-parser');
const RegisterService = require('./services/registerService');
const LoginModel = require('./models/loginModel')

const PORT = process.env.PORT || 3001;

const app = express();
app.use(bodyParser.json());

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.post('/register', async (req, res) => {
  const { login, password, rePassword } = req.body;
  const result = await RegisterService.validateRegister(login, password, rePassword)
  if (result.message) {
    return res.status(200).json(result)
  }
  return res.status(200).json({ message: 'Registrado com sucesso'});
})

app.post('/', async (req, res) => {
  const { login, password } = req.body;
  console.log(login, password);
  const data = await LoginModel.checkLogin(login, password);
  if (data.length === 0) {
    return res.status(200).json({ message: 'login ou senha errado'})
  }
  return res.status(200).json({ message: 'Logado com sucesso!' })
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});