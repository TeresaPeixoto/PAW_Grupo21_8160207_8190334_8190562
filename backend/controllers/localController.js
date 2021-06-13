var mongoose = require("mongoose");
var Local = require("../models/local");
const jwt = require("jsonwebtoken");
var authconfig = require("../config/authconfig");

var localController = {};

localController.createLocal = function (req, res) {
    var local = new Local(req.body);

    var lotPerBelowOne = local.lotacaoPercent / 100;
    local.currentLotacao = Math.round(local.maxLotacao * lotPerBelowOne);

    local.save((err) => {
        {
            if (err) {
                console.log(err);
            } else {
                res.json(local);
            }
        }
    });
}

localController.editByID = function (req, res) {
    Local.findById(req.params._id, (err, local) => {
        if (err) {
            console.log(err);
        } else {
            local=req.body;

            var lotPerBelowOne = local.lotacaoPercent / 100;
            local.currentLotacao = Math.round(local.maxLotacao * lotPerBelowOne);

            local.save();

            console.log(local);
            res.json(local);
        }
    });
};

localController.deleteByID = function (req, res) {
    Local.findByIdAndDelete(req.params._id, (err, deletedLocal) => {
        if (err) {
            console.log(err);
        } else {
            res.json(deletedLocal);
        }
    });
};

localController.showByID = function (req, res) {
    Local.findById(req.params.id, (err, dbLocal) => {
        if (err) {
            console.log(err);
        } else {
            console.log(dbLocal);
            res.json(dbLocal);
        }
    });
};

localController.showAllLocals = function (req, res){
    Local.find({}, (err, allLocals) =>{
        if(err){
            console.log(err);
        } else {
            //console.log(allLocals);
            res.json(allLocals);
        }
    });
}

module.exports = localController;