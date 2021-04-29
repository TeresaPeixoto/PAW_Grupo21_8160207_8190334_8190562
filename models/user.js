var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    userName: String,
    email: String,
    pass: String,
    birthDate: {type:Date},
    cellphone: Number,
    cc: Number,
    street: String,
    doorNumber: Number,
    district: String,
    locality: String,
    postalcode: String
});

module.exports = mongoose.model('User', UserSchema);