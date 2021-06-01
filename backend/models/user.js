var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    unique: true
  },
  email: {
    type: String,
    unique: true
  },
  password: String,
  birthDate: { type: Date },
  cellphone: Number,
  nif: { 
    type: Number,
    unique: true 
  },
  address: String,
  role: { 
    type: String, 
    default: 'cliente' 
  }
});

module.exports = mongoose.model('User', UserSchema);