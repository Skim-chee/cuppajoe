var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Creates schema for cafes
let cafeSchema = new Schema(
	{
		name: String,
		location: String,
		url: String
	},
	{ collection: 'CafeList' }
);

// Creates model in mongodb based on cafeSchema
var Cafe = mongoose.model('Cafe', cafeSchema);

export default Cafe;
