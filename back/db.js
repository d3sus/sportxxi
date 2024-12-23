const { Pool } = require("pg");

const pool = new Pool({
  user: "sport",
  host: "localhost",
  database: "news",
  password: "sport",
  port: "5432",
});

module.exports = pool;
