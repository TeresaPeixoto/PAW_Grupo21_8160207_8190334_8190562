var express = require('express');
const userController = require('../controllers/userController');
var router = express.Router();


router.get('/clientProfile/:email', userController.showByEmail);

module.exports = router;