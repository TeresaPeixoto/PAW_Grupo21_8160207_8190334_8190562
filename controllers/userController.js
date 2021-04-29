var mongoose = require("mongoose");
var User = require("../models/user");

var userController = {};

// form para criar 1 user
userController.formCreate = function (req, res) {
  res.render("users/createForm");
};

userController.createAccount = function (req, res) {
  var user = new User(req.body);
  if (!req.body.userName || req.body.userName.length < 6) {
    res.status(400).json({ message: "Name must contain 6 characters" });
  } else if (!req.body.pass || req.body.pass.length < 6) {
    res.status(400).json({ message: "Password must contain 6 characters" });
  } else if (!req.body.email) {
    res.status(400).json({ message: "Email is required" });
  } else if (!req.body.birthDate) {
    res.status(400).json({ message: "You must identify your birth date" });
  } else if (!req.body.cellphone) {
    res.status(400).json({ message: "You must identify your cellphone" });
  } else if (!req.body.cc) {
    res.status(400).json({ message: "You must identify your cc" });
  } else if (!req.body.street) {
    res.status(400).json({ message: "You must identify your street" });
  } else if (!req.body.doorNumber) {
    res.status(400).json({ message: "You must identify your door number" });
  } else if (!req.body.district) {
    res.status(400).json({ message: "You must identify your district" });
  } else if (!req.body.locality) {
    res.status(400).json({ message: "You must identify your locality" });
  } else if (!req.body.postalCode) {
    res.status(400).json({ message: "You must identify your postal code" });
  } else {
    user.save((err, room) => {
      if (err) {
        console.log("Erro a gravar");
        res.redirect("/error");
      } else {
        res
          .status(200)
          .render("", { title: "" });
      }
    });
  }
};

//update an employee
userController.addPersonalData = function (req, res) {
  User.findByIdAndUpdate(
    req.params.email,
    {
      $set: {
        birthDate: req.body.birthDate,
        cellphone: req.body.cellphone,
        cc: req.body.cc,
        street: req.body.stress,
        doorNumber: req.body.doorNumber,
        district: req.body.district,
        locality: req.body.locality,
      },
    },
    { new: true },
    function (err, employee) {
      if (err) {
        console.log(err);
        res.render("../");
      }
    }
  );
};

module.exports = userController;
