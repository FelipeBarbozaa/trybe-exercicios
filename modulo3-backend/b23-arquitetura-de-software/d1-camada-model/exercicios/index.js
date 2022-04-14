const express = require('express')
const bodyParser = require('bodyParser');
const app = express()
app.use(bodyParser.json());
const port = 3000

app.post('/user', (req, res) => {
  
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))