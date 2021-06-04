var express = require('express');
var fs = require('fs');
var path = require('path');
var router = express.Router();

var eventController = require('../controllers/eventController');
var authController = require('../controllers/authController');

router.post("/create", function (rep, res) {
    authController.verifyTokenHigherPermissions;
    ventController.createEvent;
});

router.get("/allEvents", eventController.getAllEvents);

router.put("/edit/:id", eventController.editByID);

module.exports = router;