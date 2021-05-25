var mongoose = require("mongoose");
var User = require("../models/user");

var userController = {};

userController.createAccount = function (req, res) {
  var user = new User(req.body);
  let params = {title: "Created User",
                ...req.body};

  User.findOne({ cc: req.body.cc }, function (err, result) {
    if (result != null) {
      if (!err && result.cc == req.body.cc) {
        res.status(400).json({ message: "User is already registered." });
      }
    } else {
      user.save(() => {
        {
          res.status(200).render("viewUser", params);
        }
      });
    }
  });
};

module.exports = userController;
