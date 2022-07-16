const express = require("express");
const app = express();
const routesAdmin = require("./routes/admin");
const routesShop = require("./routes/shop");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routesAdmin);
app.use(routesShop);

app.listen(3000);
