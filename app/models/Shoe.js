var mongoose = require('mongoose');

var shoeSchema = mongoose.Schema({
	name: String,
	color: String
});

var Shoe = mongoose.model('Shoe', shoeSchema);
module.exports = Shoe;