const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const path = require("path");
const adminRoutes = require("./routes/admin");
const shopRouter = require("./routes/shop");
const errorController = require("./controllers/error");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRouter);

app.use(errorController.get404);

app.listen(3000);
