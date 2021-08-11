const mysql = require('mysql');
require('dotenv').config();

const password = process.env.DATABASE_PASSWORD;

const DBInfo = {
  host: 'localhost',
  user: 'root',
  password: password,
};

const connection = mysql.createConnection(DBInfo);

module.exports = connection;