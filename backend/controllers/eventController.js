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
    } 
    
    else {
    console.log(allEvents)  ;
      res.json(allEvents);

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
  })
}

eventController.showByID = function (req, res) {
  Event.findById(req.params.id, (err, dbEvent) => {
    if (err) {
      console.log(err);
    } else {
console.log(dbEvent);
      res.json(dbEvent);
    }
  })
}

eventController.editByID = function (req, res) {
  Event.findByIdAndUpdate(req.body._id, req.body, (err, updatedEvent) => {
    if (err) {
      console.log(err);
    } else {
      res.json(updatedEvent);
    }
  })
}

eventController.eventsBySpecificPromotor = function (req, res){
  Event.find({ promotorID: req.body.promotorID}, (err, eventsByPromotor) => {
    if (err) {
      console.log(err);
    } else {
      res.json(eventsByPromotor);
    }
  });
}

module.exports = eventController;