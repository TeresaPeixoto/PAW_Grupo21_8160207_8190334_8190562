var express = require('express');
var fs = require('fs');
var path = require('path');
var router = express.Router();

var userController = require('../controllers/userController');
var authController = require('../controllers/authController');

router.post("/", userController.changeRoleToAdmin);
router.post("/newPromot",userController.changeRoleToPromotor);
module.exports = router;