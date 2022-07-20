const express = require("express");
const app = express();
app.set("view engine", "pug");
app.set("views", "views");

const path = require("path");
const adminData = require("./routes/admin");
const shopRouter = require("./routes/shop");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRouter);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
