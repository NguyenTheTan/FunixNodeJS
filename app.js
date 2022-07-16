const http = require("http");

const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("hello world");
  next();
});

app.use((req, res, next) => {
  console.log("I love nodejs");
});

const server = http.createServer(app);

server.listen(3000);
