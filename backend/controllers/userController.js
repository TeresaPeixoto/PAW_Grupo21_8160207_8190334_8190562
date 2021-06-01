var mongoose = require("mongoose");
var User = require("../models/user");
const jwt = require('jsonwebtoken');
var authconfig = require('../config/authconfig');


var userController = {};

userController.createAccount = function (req, res) {
  var user = new User(req.body);
  console.log(user);
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
  User.findOne({ _id: req.params._id }).exec((err, dbuser) => {
    if (err) {
      console.log(err);
    } else {
      res.json(dbuser);
    }
  })
}

userController.showByEmail = function (req, res) {
  User.findOne({ email: req.params.email }).exec((err, dbuser) => {
    if (err) {
      console.log(err);
    } else {
      res.json(dbuser);
    }
  })
}

userController.editById = function (req, res) {
  User.findByIdAndUpdate(req.body._id, req.body, (err, editedUser) => {
    if (err) {
      console.log(err);
    } else {
      res.json(editedUser);
    }
  })
}

userController.deleteById = function (req, res) {
  User.remove({ _id: req.params._id }).exec((err, deletedUser) => {
    if (err) {
      console.log(err);
    } else {
      res.json(deletedUser);
    }
  })
}

userController.deleteByEmail = function (req, res) {
  User.remove({ email: req.params.email }).exec((err, deletedUser) => {
    if (err) {
      console.log(err);
    } else {
      res.json(deletedUser);
    }
  })
}

module.exports = userController;