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
    postalCode1: Number,
    postalCode2: Number
});

module.exports = mongoose.model('User', UserSchema);