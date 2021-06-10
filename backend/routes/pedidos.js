var express = require("express");
var fs = require("fs");
var path = require("path");
var router = express.Router();

var pedidoPromotorController = require("../controllers/pedidoPromotorController");

router.post("/createRequest", pedidoPromotorController.createRequest);
router.delete("/deleteRequest/:id", pedidoPromotorController.deleteByID);
router.get("/allRequest", pedidoPromotorController.getAllRequests);
router.get("/getRequestByEmail/:email", pedidoPromotorController.showByEmail);


module.exports = router;
