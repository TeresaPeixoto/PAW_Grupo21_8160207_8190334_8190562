var express = require("express");
var fs = require("fs");
var path = require("path");
var router = express.Router();

var userController = require("../controllers/userController");

router.post("/created_user", userController.createAccount);

router.get("/", function (req, res, next) {
  res.render("register", { title: "Register" });
});

module.exports = router;
