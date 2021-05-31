var express = require('express');
var fs = require('fs');
var path = require('path');
var router = express.Router();

var indexController = require('../controllers/indexController');

router.get("/", indexController.showHomepage);

module.exports = router;