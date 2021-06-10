const { ObjectID } = require('bson');
var mongoose = require('mongoose');

var PedidoPromotorSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true
      },
    descricao: String
});

module.exports = mongoose.model('PedidoPromotor', PedidoPromotorSchema);