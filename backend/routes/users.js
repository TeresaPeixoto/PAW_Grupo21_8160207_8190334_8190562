var express = require('express');
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
var router = express.Router();

router.get('/clientProfile/:email', userController.showByEmail);

router.put('/clientProfile/suspend/:email', function (rep, res) {
    authController.verifyToken;
    userController.suspendUser;
});

router.delete('/clientProfile/delete/:email', authController.verifyTokenAdmin, userController.deleteByEmail);


router.put('/clientProfile/edit/:email', userController.editByEmail, authController.verifyToken);


module.exports = router;