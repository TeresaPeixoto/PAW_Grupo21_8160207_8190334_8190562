var mongoose = require("mongoose");
var Event = require("../models/event");

var eventController = {};

eventController.createEvent = function (req, res, next) {
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
    event.save((err) => {
      if (err) {
        console.log("Erro a gravar");
        next(err);
      } else {
        res.json(event);
      }
    });
  }
};

eventController.getAllEvents = function (req, res, next) {
  Event.find({}, (err, dbevents) => {
    if (err) {
      console.log(err);
      next(err);
    } else {
      console.log(dbevents);
      res.json(dbevents);
    }
  });
};

eventController.deleteByID = function (req, res, next) {
  Event.remove({ _id: req.params._id }).exec((err, deletedEvent) => {
    if (err) {
      console.log(err);
    } else {
      res.json(deletedEvent)
    }
  })
}

module.exports = eventController;