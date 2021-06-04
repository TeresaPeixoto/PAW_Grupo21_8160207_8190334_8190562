var mongoose = require('mongoose');

var EventSchema = new mongoose.Schema({
    eventName:String,
    local:String,
    eventDate: {type:Date},
    price: Number,
    lugares: Number,
    description: String,
    lotacao: Number
});

module.exports = mongoose.model('Event', EventSchema);