const db = require('./connection');
const md5 = require('md5');

const checkLogin = async (username, password) => {
  const [result] = await db.execute('SELECT * FROM user_login WHERE username = ? AND password = ?', [username, md5(password)])
  return result;
}

module.exports = {
  checkLogin,
}