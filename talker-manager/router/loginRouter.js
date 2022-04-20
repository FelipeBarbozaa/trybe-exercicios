const express = require('express');
const middlewares = require('../middlewares');
const controllers = require('../controllers');

const loginMiddleware = [
  middlewares.email,
  middlewares.password,
];

const router = express.Router();

router.post('/login', loginMiddleware, controllers.login);

module.exports = router;
