const express = require('express');
const bodyParser = require('body-parser');
const talkerRouter = require('./router/talkerRouter');
const loginRouter = require('./router/loginRouter');

const app = express();
const HTTP_OK_STATUS = 200;
const PORT = '3000';

app.use(bodyParser.json());
// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_req, res) => res.status(HTTP_OK_STATUS).send());
app.use('/talker', talkerRouter);
app.use(loginRouter);
app.listen(PORT, () => {
});

// referência de estruturação: https://medium.com/@mateus1198/como-estruturo-meus-projetos-usando-express-e-nodejs-ac9a0daa5ed5