var mongoose = require("mongoose");
var PedidoPromotor = require("../models/pedidoPromotor");
const jwt = require("jsonwebtoken");
var authconfig = require("../config/authconfig");
const user = require("../models/user");
const pedidoPromotor = require("../models/pedidoPromotor");

var pedidoPromotorController = {};

pedidoPromotorController.createRequest = function (req, res) {
  console.log(req.body);
  var request = new PedidoPromotor(req.body);
  request.save((err) => {
    if (err) {
      console.log(err);
    console.log("er");
    } else {
      res.json(request);
    }
  });
};

pedidoPromotorController.getAllRequests = function (req, res) {
  PedidoPromotor.find({}, (err, allRequests) => {
    if (err) {
      console.log(err);
    } else {
      console.log(allRequests);
      res.json(allRequests);
    }
  });
};

pedidoPromotorController.showByEmail = function (req, res) {
    PedidoPromotor.find({email:req.params.email}, (err, dbRequest) => {
    if (err) {
      console.log(err);
    } else {
      console.log(dbRequest);
      res.json(dbRequest);
    }
  });
};

pedidoPromotorController.deleteByID = function (req, res) {
    PedidoPromotor.findByIdAndDelete(req.params.id, (err, deletedRequest) => {
    if (err) {
      console.log(err);
    } else {
      console.log(deletedRequest);
      res.json(deletedRequest);
    }
  });
};

module.exports = pedidoPromotorController;
