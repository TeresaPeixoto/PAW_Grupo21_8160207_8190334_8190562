var express = require("express");
var fs = require("fs");
var path = require("path");
var router = express.Router();

var bilheteController = require("../controllers/bilheteController");

router.post("/:id", bilheteController.addBilhete);

module.exports = router;
