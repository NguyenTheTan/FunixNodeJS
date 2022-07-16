const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.send(
    "<form action = '/admin/add-product' method='post'><input type = 'text' name = 'title' /><input type = 'submit' value = 'Add' /></form>"
  );
});

router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
