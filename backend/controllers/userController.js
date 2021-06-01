var mongoose = require("mongoose");
var User = require("../models/user");
const jwt = require('jsonwebtoken');
var authconfig = require('../config/authconfig');
const user = require("../models/user");


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
  User.findById(req.body._id, req.body, (err, dbUser) => {
    if (err) {
      console.log(err);
    } else {
      res.json(dbUser);
    }
  })
}

userController.showByEmail = function (req, res) {
  User.findOne({ email: req.params.email }).exec((err, dbUser) => {
    if (err) {
      console.log(err);
    } else {
      res.json(dbUser);
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

userController.editByEmail = function (req, res) {
  User.findOneAndUpdate(req.body.email, req.body, (err, editedUser) => {
    if (err) {
      console.log(err);
    } else {
      res.json(editedUser);
    }
  })
}

userController.deleteById = function (req, res) {
  User.findByIdAndDelete(req.body._id, req.body, (err, deletedUser) => {
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

userController.changeRole = function (req, res) {
  User.findOneAndUpdate(req.body.email, { role: req.body.role }, (err, editedUser) => {
    if (err) {
      console.log(err);
    } else {
      res.json(editedUser);
    }
  })
}

userController.changeRoleToPromotor = function(req, res){
  User.findOneAndUpdate(req.body.email, {role: 'promotor'}, (err, editedUser)=>{
    if(err){
      console.log(err);
    }else{
      res.json(editedUser);
    }
  })
}

userController.changeRoleToAdmin = function(req, res){
  User.findOneAndUpdate(req.body.email, {role: 'admin'}, (err, editedUser)=>{
    if(err){
      console.log(err);
    }else{
      res.json(editedUser);
    }
  })
}

module.exports = userController;