var mongoose = require("mongoose");
var User = require("../models/user");
const jwt = require('jsonwebtoken');
var authconfig =require('../config/authconfig');


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
          if(err){
            console.log(err);
            
          }else{
          res.json({registo:true});
        }}
      });
    }
  });
};

module.exports = userController;
