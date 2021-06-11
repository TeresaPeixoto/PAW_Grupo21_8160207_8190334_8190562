var mongoose = require("mongoose");
var Event = require("../models/event");
var Local = require("../models/local");
var path = require('path');
var fs = require("fs");


var eventController = {};

eventController.createEvent = function (req, res) {
  var event = new Event(req.body);

  Local.findById(event.localID), (err, local) => {
    if (err) {
      console.log(err);
    } else {
      event.bilhetesDisponiveis = local.currentLotacao;
      res.json(local);
    }
  }

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
        console.log(err);

      } else {
        res.json(event);
      }
    });
  }
};

eventController.getAllEvents = function (req, res) {
  Event.find({}, (err, allEvents) => {
    if (err) {
      console.log(err);
    } else {
      console.log(allEvents);
      res.json(allEvents);
    }
  });
};

function auxUpdateStatus(eventosToUpdate) {
  var currentTime = new Date();
  for (var i = 0; i < eventosToUpdate.length; i++) {
    console.log(eventosToUpdate[i].eventDate);
    console.log(currentTime);
    console.log(eventosToUpdate[i].eventDate < currentTime);
    if (new Date(eventosToUpdate[i].eventDate) < currentTime) {
      eventosToUpdate[i].eventStatus = "Terminada";

      Event.findByIdAndUpdate(eventosToUpdate[i]._id, eventosToUpdate[i], (err, updatedEvent) => {
        if (err) {
          console.log(err);
        }
      });
    }
  }

  return eventosToUpdate;
}

eventController.getAllAvailableEvents = function (req, res) {
  console.log("Chegou ao controlador");
  Event.find({ eventStatus: "Por decorrer" })
    .sort({ eventDate: 1 })
    .exec((err, allAvailableEvents) => {
      if (err) {
        console.log(err);
      } else {
        allAvailableEvents = auxUpdateStatus(allAvailableEvents);
        res.json(allAvailableEvents);
      }
    });
};

eventController.getAllFinishedEvents = function (req, res) {
  console.log("Chegou ao controlador");
  Event.find({ eventStatus: "Terminada" })
    .sort({ eventDate: 1 })
    .exec((err, allFinishedEvents) => {
      if (err) {
        console.log(err);
      } else {
        res.json(allFinishedEvents);
      }
    });
};


eventController.deleteByID = function (req, res) {
  Event.findByIdAndDelete(req.body._id, (err, deletedEvent) => {
    if (err) {
      console.log(err);
    } else {
      res.json(deletedEvent);
    }
  });
};

eventController.showByID = function (req, res) {
  Event.findById(req.params.id, (err, dbEvent) => {
    if (err) {
      console.log(err);
    } else {
      console.log(dbEvent);
      res.json(dbEvent);
    }
  });
};

eventController.editByID = function (req, res) {
  console.log("chegou ao edit");
  Event.findByIdAndUpdate(req.body._id, req.body, (err, updatedEvent) => {
    if (err) {
      console.log(err);
    } else {
      res.json(updatedEvent);
    }
  });
};

eventController.eventsBySpecificPromotor = function (req, res) {
  Event.find({ promotorID: req.body.promotorID }, (err, eventsByPromotor) => {
    if (err) {
      console.log(err);
    } else {
      res.json(eventsByPromotor);
    }
  });
};

module.exports = eventController;
