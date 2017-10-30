var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Creates schema for users
let userSchema = new Schema(
	{
		user: String,
		password: String
	},
	{ collection: 'Users' }
);

// Creates model in mongodb based on userSchema
var User = mongoose.model('User', userSchema);

export default User;
