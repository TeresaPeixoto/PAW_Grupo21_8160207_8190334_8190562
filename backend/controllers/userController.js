var mongoose = require("mongoose");
var User = require("../models/user");
const jwt = require("jsonwebtoken");
var authconfig = require("../config/authconfig");
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
  User.findById(req.params._id, req.body, (err, dbUser) => {
    if (err) {
      console.log(err);
    } else {
      res.json(dbUser);
    }
  });
};

userController.showByEmail = function (req, res) {
  User.findOne({ email: req.params.email }).exec((err, dbUser) => {
    if (err) {
      console.log(err);
    } else {
      res.json(dbUser);
    }
  });
};

userController.editById = function (req, res) {
  User.findByIdAndUpdate(req.params._id, req.body, (err, editedUser) => {
    if (err) {
      console.log(err);
    } else {
      res.json(editedUser);
    }
  });
};

userController.editByEmail = function (req, res) {
  User.findOneAndUpdate(req.params.email, req.body, (err, editedUser) => {
    if (err) {
      console.log(err);
    } else {
      res.json(editedUser);
    }
  });
};

userController.deleteById = function (req, res) {
  User.findByIdAndDelete(req.params._id, req.body, (err, deletedUser) => {
    if (err) {
      console.log(err);
    } else {
      res.json(deletedUser);
    }
  });
};

userController.deleteByEmail = function (req, res) {
  User.remove({ email: req.params.email }).exec((err, deletedUser) => {
    if (err) {
      console.log(err);
    } else {
      res.json(deletedUser);
    }
  });
};

userController.suspendUserByEmail = function (req, res) {
  User.findOneAndUpdate({ email: req.params.email },
    { $set: { userStatus: "suspenso" } },
    { new: true }).exec(function (err, suspendedUser) {
      if (err) {
        console.log(err);
      } else {
        res.json(suspendedUser);
      }
    }
    );
};

userController.changeRole = function (req, res) {
  User.findOneAndUpdate(
    req.body.email,
    { role: req.body.role },
    (err, editedUser) => {
      if (err) {
        console.log(err);
      } else {
        res.json(editedUser);
      }
    }
  );
};

userController.changeRoleToPromotor = function (req, res) {
  console.log("chegou ao controlador");
  console.log(req.body);
  User.findOneAndUpdate(
    { email: req.body.email },
    { $set: { role: "promotor" } },
    { new: true }
  ).exec(function (err, editedUser) {
    if (err) {
      console.log(err);
    } else {
      console.log(editedUser);
      res.json(editedUser);
    }
  }
  );
};

userController.changeRoleToAdmin = function (req, res) {
  console.log(req.body.email);
  User.findOneAndUpdate(
    { email: req.body.email },
    { $set: { role: "admin" } },
    { new: true }
  ).exec(function (err, editedUser) {
    if (err) {
      console.log(err);
    } else {
      console.log(editedUser);
      res.json(editedUser);
    }
  });
};

userController.demotePromotor = function (req, res) {
  User.findOneAndUpdate(
    { email: req.body.email },
    { $set: { role: "cliente" } },
    { new: true }
  ).exec(function (err, editedUser) {
    if (err) {
      console.log(err);
    } else {
      console.log(editedUser);
      res.json(editedUser);
    }
  });
}

module.exports = userController;
