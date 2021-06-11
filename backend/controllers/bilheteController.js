var mongoose = require("mongoose");
var Bilhete = require("../models/bilhete");
var Event = require("../models/event");
const jwt = require("jsonwebtoken");
var authconfig = require("../config/authconfig");

var bilheteController = {};

bilheteController.addBilhete = function (req, res) {
    var bilhete = new Bilhete(req.body);

    bilhete.userID = req.params.userID;
    bilhete.eventID = req.params.id;

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

module.exports = bilheteController;