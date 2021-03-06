var express = require('express');
var fs = require('fs');
var path = require('path');
var router = express.Router();

var eventController = require('../controllers/eventController');

router.get("/", eventController.getAllEvents);

module.exports = router;