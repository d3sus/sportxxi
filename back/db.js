const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "sportxxi",
  password: "qw7e6q",
  port: "5432",
});

module.exports = pool;
