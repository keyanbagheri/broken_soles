var Shoe = require('../models/Shoe');

exports.seedShoes = function seedShoes() {
	Shoe.find({}).exec(function (err, collection) {
		if (collection.length === 0) {
			Shoe.create({name: "Nike", color: "Blue"});
			Shoe.create({name: "Reebok", color: "Rainbow"});
		}
	});
};
