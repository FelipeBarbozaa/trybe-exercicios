const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "docker",
  database: "register"
});

module.exports = db;