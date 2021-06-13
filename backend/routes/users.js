var express = require('express');
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
var router = express.Router();

router.get('/clientProfile/:email', userController.showByEmail);

router.put('/clientProfile/suspend/:email', userController.suspendUserByEmail);

router.put('/clientProfile/edit/:email', userController.editByEmail);

router.delete('/clientProfile/delete/:email', userController.deleteByEmail);

module.exports = router;