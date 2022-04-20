const db = require('./connection');
const md5 = require('md5');

const findLogin = async (login) => {
  const [result] = await db.execute('SELECT username FROM user_login WHERE username = ?', [login])
  return result;
}

const create = async (login, password) => {
  await db.execute('INSERT INTO user_login(username, password) VALUES (?, ?)', [login, md5(password)])
}

module.exports = {
  findLogin,
  create,
}