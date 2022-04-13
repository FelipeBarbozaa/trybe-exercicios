const express = require('express');
const fs = require('fs').promises;
const rescue = require('express-rescue');
const app = express();
const errorMiddleWare = require('./errorMiddleWare');

app.get('/:filename', [rescue(async (req, res) => {
  const file = await fs.readFile(`./${req.params.filename}`);
  res.send(file.toString('utf-8'));
  }),
  (err, req, res, next) => {
    if (err.code === 'ENOENT') {
      const newError = new Error(err.message);
      newError.code = 'file_not_found'
      newError.status = 404
      return next(newError);
    }

    return next(err);
  }
]);

app.use(errorMiddleWare);

app.listen(3000, () => console.log('Listening at 3000! '))