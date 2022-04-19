const express = require('express');
const fs = require('fs').promises;
const rescue = require('express-rescue');
const app = express();

const errorMiddleWare = (err, _req, res, _next) => {
  if (err.code && err.status) {
    return res.status(err.status).json({ message: err.message, code: err.code });
  }
  return res.status(500).json({ message: err.message });
}

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