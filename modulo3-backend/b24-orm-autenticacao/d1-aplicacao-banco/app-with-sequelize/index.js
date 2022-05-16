const express = require('express')
const app = express()
const port = 3000
const { User } = require('./models');

app.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    return res.status(200).json(users);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))