module.exports = function (app) {

	let contest = require('../controllers/contest.controllers.js');

	app.get('/', function (req, res) {
		res.send('Petit contest JS !!');
	});

	// Create un nouvel enregistrement
	app.post('/api/contest_js', contest.create);
};
