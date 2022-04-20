const express = require('express');
const rescue = require('express-rescue');
const middlewares = require('../middlewares');
const controllers = require('../controllers');

const app = express();
const router = express.Router();
const talkerMiddleware = [
  middlewares.token,
  middlewares.name,
  middlewares.age,
  middlewares.talk,
  middlewares.watchedAt,
  middlewares.rate,
];

router.get('/', rescue(controllers.getTalker));
router.get('/search', middlewares.token, rescue(controllers.getTalkerByQuery)); 
router.get('/:id', rescue(controllers.getTalkerById));
router.post('/', talkerMiddleware, rescue(controllers.createTalker));
router.put('/:id', talkerMiddleware, rescue(controllers.editTalker));
router.delete('/:id', middlewares.token, rescue(controllers.deleteTalker));

app.use((err, _req, res, _next) => {
  res.status(500).json({ error: err.message });
});

module.exports = router;
