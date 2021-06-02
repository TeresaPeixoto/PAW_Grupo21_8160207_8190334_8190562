var express = require('express');
const userController = require('../controllers/userController');
var router = express.Router();

router.get('/clientProfile/:email', userController.showByEmail);

router.get('/clientProfile/delete/:email', userController.deleteByEmail);

router.put('/clientProfile/edit/:email', userController.editByEmail);

module.exports = router;