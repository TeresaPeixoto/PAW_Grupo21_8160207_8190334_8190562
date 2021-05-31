var mongoose = require("mongoose");
var User = require("../models/user");
const jwt = require('jsonwebtoken');
var authconfig = require('../config/authconfig');


var userController = {};

userController.createAccount = function (req, res) {
  var user = new User(req.body);

  User.findOne({ email: req.body.email }, function (err, result) {
    if (result != null) {
      if (!err && result.email == req.body.email) {
        res.json({ message: "User is already registered." });
      }
    } else {
      user.save((err) => {
        {
          if (err) {
            console.log(err);
          } else {
            res.json({ registo: true });
          }
        }
      });
    }
  });
};

userController.showById = function (req, res) {
  User.findOne({ _id: req.params._id }).exec((err, dbitem) => {
    if (err) {
      console.log(err);
    } else {
      res.json(dbitem);
    }
  })
}

userController.showByEmail = function (req, res) {
  User.findOne({ email: req.params.email }).exec((err, dbitem) => {
    if (err) {
      console.log(err);
    } else {
      res.json(dbitem);
    }
  })
}

userController.editById = function (req, res) {
  User.findByIdAndUpdate(req.body._id, req.body, (err, editedItem) => {
    if (err) {
      console.log(err);
    } else {
      res.json(editedItem);
    }
  })
}

userController.deleteById = function (req, res) {
  User.remove({ _id: req.params._id }).exec((err, deletedItems) => {
    if (err) {
      console.log(err);
    } else {
      res.json(deletedItem);
    }
  })
}

userController.deleteByEmail = function (req, res) {
  User.remove({ email: req.params.email }).exec((err, deletedItems) => {
    if (err) {
      console.log(err);
    } else {
      res.json(deletedItem);
    }
  })
}

module.exports = userController;