var express = require("express");
var fs = require("fs");
var path = require("path");
var router = express.Router();

var bilheteController = require("../controllers/bilheteController");

router.post("/:id", bilheteController.addBilhete);

router.put('/edit/:id', bilheteController.editBilheteByID);

router.get('/view/:id', bilheteController.showByID);

router.get('/viewtickets/:userID', bilheteController.showAllBilhetesByUserID);

router.put('/cancelticket/:id', bilheteController.cancelBilhete);

router.put('/aceitarticket/:id', bilheteController.aceitarBilhete);

router.delete('/delete/:id', bilheteController.deleteBilhete);

router.get('/allbilhetes', bilheteController.getAllBilhetes);

module.exports = router;
