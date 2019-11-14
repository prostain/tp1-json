// MODULES
const express = require('express');
const bodyParser = require('body-parser');
const app = express();


//configure body-parser for express
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// The server should start listening
let server = app.listen(3000, function () {
	let host = server.address().address;
	let port = server.address().port;
	console.log("App listening at http://%s:%s", host, port);
	console.log('start : http://localhost:3000');
});

// Routes
require('./app/routes/contest.routes.js')(app);

