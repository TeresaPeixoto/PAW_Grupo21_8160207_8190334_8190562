var mongoose = require("mongoose");
var Bilhete = require("../models/bilhete");
var Event = require("../models/event");
const jwt = require("jsonwebtoken");
var authconfig = require("../config/authconfig");

var bilheteController = {};

bilheteController.addBilhete = function (req, res) {
    var bilhete = new Bilhete(req.body);

    bilhete.userID = req.body.userID;
    bilhete.eventID = req.params.id;
    bilhete.dataDeCompra = new Date();
    console.log(req.body);

    bilhete.save((err) => {
        if (err) {
            console.log(err);
        } else {
            Event.findById(bilhete.eventID, (err, evento) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(bilhete.lugares);
                    console.log(evento.bilhetesDisponiveis);
                    evento.bilhetesDisponiveis -= bilhete.lugares;

                    evento.save();
                }
            });
            res.json(bilhete);
        }
    });
};

bilheteController.editBilheteByID = function (req, res) {
    Bilhete.findByIdAndUpdate(req.params.id, req.body, (err, updatedEvent) => {
        if (err) {
            console.log(err);
        } else {
            res.json(updatedEvent);
        }
    });
};

bilheteController.showByID = function (req, res) {
    Bilhete.findById(req.params.id, (err, dbLocal) => {
        if (err) {
            console.log(err);
        } else {
            console.log(dbLocal);
            res.json(dbLocal);
        }
    });
};

bilheteController.showAllBilhetesByUserID = function (req, res) {
    Bilhete.find({ userID: req.params.userID }, (err, bilhetes) => {
        if (err) {
            console.log(err);
        } else {
            console.log(bilhetes);
            res.json(bilhetes);
        }
    });
}

bilheteController.cancelBilhete = function (req, res) {
    var bilhete = new Bilhete(req.body);

    Bilhete.findByIdAndUpdate({ _id: req.params.id },
        { $set: { ticketStatus: "Cancelado" } },
        { new: true }).exec(function (err, cancelledBilhete) {
            if (err) {
                console.log(err);
            } else {
                Event.findById(cancelledBilhete.eventID, (err, updatedEvent) => {
                    if (err) {
                      console.log(err);
                    } else {        
                        updatedEvent.bilhetesDisponiveis+=cancelledBilhete.lugares;
                        Event.findByIdAndUpdate(updatedEvent._id, updatedEvent, (err, updatedEvent2) => {
                            if (err) {
                              console.log(err);
                            } else {
                              res.json(cancelledBilhete);
                            }
                          });
                    }
                  });
                
                
            }
        });
};

bilheteController.aceitarBilhete = function (req, res) {
    Bilhete.findByIdAndUpdate({ _id: req.params.id },
        { $set: { ticketStatus: "aceite" } },
        { new: true }).exec(function (err, acceptedBilhete) {
            if (err) {
                console.log(err);
            } else {
                console.log(acceptedBilhete);
                res.json(acceptedBilhete);
            }
        });
};

bilheteController.deleteBilhete = function (req, res) {
    Bilhete.findByIdAndRemove({ _id: req.params.id }, (err, deletedBilhete) => {
        if (err) {
            console.log(err);
        } else {
            res.json(deletedBilhete);
        }
    });
};

bilheteController.getAllBilhetes = function (req, res) {
    console.log("Chegou ao controlador");
    Bilhete.find({ ticketStatus: "Por utilizar" })
      .sort({ dataDeCompra: 1 })
      .exec((err, allbilhetes) => {
        if (err) {
          console.log(err);
        } else {
          res.json(allbilhetes);
        }
      });
  };




module.exports = bilheteController;