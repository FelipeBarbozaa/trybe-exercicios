const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const userRouter = require('./routes/userRoute');
const app = express();
const tokenValidation = require('./middleware/tokenMiddleware');

app.use(bodyParser.json());
app.use('/user', userRouter);

app.get('/btc/price', tokenValidation, async (req, res) => {
  const URL = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json'
  const result = await axios.get(URL)
  res.status(200).json(result.data);
})

app.listen(3000, () => console.log('Listening on 3000! '));
