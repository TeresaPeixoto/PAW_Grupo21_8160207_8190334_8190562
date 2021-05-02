var mongoose = require("mongoose");
var User = require("../models/user");

var userController = {};

// form para criar 1 user
userController.formCreate = function (req, res) {
  res.render("users/createForm");
};

userController.createAccount = function (req, res) {
  var user = new User(req.body);
/*
  User.findOne({cc: req.body.cc}, function(err, result) {
    if (err) throw err;
    console.log(result.userName);
  });
*/
  /*User.findOne({},{cc: req.body.cc}), function (err, caughtUser){
    console.log("\n entrou aqui 001!");
    if(!err && caughtUser.cc==req.body.cc){
      console.log("\n entrou aqui 002!");
      res.status(400).json({ message: "User is already registered." });
    }else{ 
      console.log("\n entrou aqui 003!");
      res.status(200).json({ message: "Sucess." });
        }
  }*/

  User.findOne({cc: req.body.cc}, function(err, result) {
    
/*     if (err) throw err;
     */
    if( result!= null){    
      if(!err && result.cc==req.body.cc){
      console.log("\n entrou aqui 002!");
      res.status(400).json({ message: "User is already registered." });
      //throw err; 
      console.log("\n entrou aqui 003!");
     
    }
  }else{
  console.log("\n entrou aqui 007!");
   
    user.save(() => {
      {
        console.log(" entrou aqui !");
        res 
          .status(200)
          .render("", { title: "" });
      }
    });
  }
  })};

/*
function isUserRegistered(let paramEmail){
  User.findOne({'email': paramEmail}), function (err, caughtUser){
    if(!err && caughtUser.email==paramEmail){
      return true;
    }else{
      return false;
    }
  }
}*/

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