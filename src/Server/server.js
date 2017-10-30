if (process.env.NODE_ENV !== 'production') {
	require('dotenv').load();
}

var express = require('express'),
	http = require('http'),
	https = require('https'),
	forceSsl = require('express-force-ssl'),
	fs = require('fs'),
	bodyParser = require('body-parser'),
	cors = require('cors'),
	axios = require('axios'),
	assert = require('assert'),
	mongoose = require('mongoose'),
	path = require('path'),
	graphql = require('graphql').graphql,
	graphQLHTTP = require('express-graphql'),
	schema = require('./graphql/schema'),
	user = require('./mongoose/user'),
	cafe = require('./mongoose/cafe');

const app = express();
app.use(forceSsl);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

var port = process.env.PORT || 4000;

// If production environment, sets SSH letsencrypt certificates for https
if (process.env.NODE_ENV === 'production') {
	var key = fs.readFileSync(
		'/etc/letsencrypt/live/thecitythatneversleeps.me/privkey.pem'
	);
	var cert = fs.readFileSync(
		'/etc/letsencrypt/live/thecitythatneversleeps.me/fullchain.pem'
	);
	var ca = fs.readFileSync(
		'/etc/letsencrypt/live/thecitythatneversleeps.me/chain.pem'
	);
	var options = {
		key: key,
		cert: cert,
		ca: ca
	};
	// Creates https server on port 4330
	https.createServer(options, app).listen(4330, () => {
		console.log('HTTPS server is running on port ' + 4330);
	});
}
// Creates default http server on port 4000
http.createServer(app).listen(port, () => {
	console.log('HTTP server is running on port ' + port);
});

// Sets mongoose to use native ES6 promises instead of mpromise
// http://mongoosejs.com/docs/promises.html
mongoose.Promise = global.Promise;

// Depecrated use of open() in mongoose, set useMongoCLient option
// http://mongoosejs.com/docs/connections.html#use-mongo-client
mongoose
	.connect('mongodb://localhost:27017/local', { useMongoClient: true })
	.then(
		db => {
			console.log('++SUCCESS connected to mongoose');
		},
		err => {
			console.log('--FAILED to connect to mongoose: ' + err);
		}
	);
