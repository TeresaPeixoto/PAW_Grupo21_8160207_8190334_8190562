var mongoose = require("mongoose");
var Event = require("../models/event");

var eventController = {};

eventController.createEvent = function (req, res) {
  var event = new Event(req.body);
  if (!req.body.eventName || req.body.eventName.length < 6) {
    res.status(400).json({ message: "Event name must contain 6 characters" });
  } else if (!req.body.local) {
    res.status(400).json({ message: "You must identify your local" });
  } else if (!req.body.price) {
    res.status(400).json({ message: "You must identify your price" });
  } else if (!req.body.lugares) {
    res
      .status(400)
      .json({ message: "You must identify your number of lugares" });
  } else if (!req.body.description) {
    res.status(400).json({ message: "You must identify your description" });
  } else {
    event.save((err, room) => {
      if (err) {
        console.log("Erro a gravar");
        res.redirect("/error");
      } else {
        res.status(200).render("", { title: "" });
      }
    });
  }
};

eventController.getAllEvents = function (req, res) {
  Event.find({}, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.render("index", { result: result });
    }
  });
};

module.exports = eventController;