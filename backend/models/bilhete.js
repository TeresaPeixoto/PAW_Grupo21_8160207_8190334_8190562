const { ObjectID } = require('bson');
var mongoose = require('mongoose');

var BilheteSchema = new mongoose.Schema({
    userID: ObjectID,
    eventID: ObjectID,
    ticketStatus: {
        type: String,
        default: "Por utilizar"
    },
    comprovativo: String,
    lugares: Number
});

module.exports = mongoose.model('Bilhete', BilheteSchema);