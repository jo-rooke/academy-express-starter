const Pool = require("pg").Pool;

const pool1 = new Pool({
  database: "db_todo",
});

module.exports = pool;
