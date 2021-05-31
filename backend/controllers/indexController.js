var mongoose = require("mongoose");
var Event = require("../models/event");

var indexController = {};

indexController.showHomepage = function (req, res) {
  Event.find({}, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.render("index", { result: result });
    }
  });
};

module.exports = indexController;