var express = require('express');
var fs = require('fs');
var path = require('path');
var router = express.Router();

var eventController = require('../controllers/eventController');
var authController = require('../controllers/authController');

router.post("/create", eventController.createEvent, authController.verifyTokenPromotor, authController.verifyTokenAdmin);

router.get("/allEvents", eventController.getAllEvents);

router.get("")

module.exports = router;