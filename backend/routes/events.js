var express = require('express');
var fs = require('fs');
var path = require('path');
var router = express.Router();

var eventController = require('../controllers/eventController');
var authController = require('../controllers/authController');

router.post("/create", eventController.createEvent);

router.get("/allEvents", eventController.getAllEvents);

router.get("/allAvailableEvents", eventController.getAllAvailableEvents);

router.get("/allFinishedEvents", eventController.getAllFinishedEvents);

router.put("/edit/:id", eventController.editByID);

router.put("/editlocal/:id", eventController.changeLocal);

router.get("/getEvento/:id",eventController.showByID);

router.get("/search/:promotorid", eventController.eventsBySpecificPromotor);

module.exports = router;