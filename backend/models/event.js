const { ObjectID } = require('bson');
var mongoose = require('mongoose');

var EventSchema = new mongoose.Schema({
    
    eventName: String,
    local: String,
    eventDate: { type: Date },
    price: Number,
    lugares: Number,
    description: String,
    lotacao: Number,
    eventStatus: {
        type: String,
        default: 'Por decorrer'
    }
});

module.exports = mongoose.model('Event', EventSchema);