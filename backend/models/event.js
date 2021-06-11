const { ObjectID } = require('bson');
var mongoose = require('mongoose');

var EventSchema = new mongoose.Schema({
    promotorID: ObjectID,
    localID: ObjectID,
    eventName: String,
    eventDate: { type: Date },
    price: Number,
    description: String,
    bilhetesDisponiveis: Number,
    eventStatus: {
        type: String,
        default: 'Por decorrer'
    },
    eventPicture: String
});

module.exports = mongoose.model('Event', EventSchema);