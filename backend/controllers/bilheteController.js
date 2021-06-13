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
    console.log(req.body);


    bilhete.save((err) => {
        if (err) {
            console.log(err);
        } else {
            Event.findById(bilhete.eventID, (err, evento) => {
                if (err) {
                    console.log(err);
                } else {
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
    Bilhete.findByIdAndUpdate({ _id: req.params.id },
        { $set: { ticketStatus: "Cancelado" } },
        { new: true }).exec(function (err, cancelledBilhete) {
            if (err) {
                console.log(err);
            } else {
                console.log(cancelledBilhete);
                res.json(cancelledBilhete);
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

module.exports = bilheteController;