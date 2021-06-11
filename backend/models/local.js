const { ObjectID } = require('bson');
var mongoose = require('mongoose');

var LocalSchema = new mongoose.Schema({
    morada: String,
    lotacaoPercent: Number,
    maxLotacao: Number, 
    currentLotacao: Number
});

module.exports = mongoose.model('Local', LocalSchema);