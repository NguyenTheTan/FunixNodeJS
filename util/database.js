const mysql = require("mysql2");

const poll = createPoll({
  host: "localhost",
  user: "root",
  database: "node-complete",
  password: "roottoor",
});

module.exports = poll.promise();
