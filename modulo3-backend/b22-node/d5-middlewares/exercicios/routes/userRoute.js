const express = require('express');
const router = express.Router();

const checkRegister = require('../middleware/registerMiddleWare');
const checkLogin = require('../middleware/loginMiddleware');

router.post('/register', checkRegister, (_req, res) => {
  return res.status(400).json({ message: 'invalid data' })
})

router.post('/login', checkLogin, (_req, res) => {
  return res.status(400).json({ message: 'email or password is incorrect! '});
})

module.exports = router;