const mysql = require("mysql2");

const poll = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node-complete",
  password: "roottoor",
});

module.exports = poll.promise();
