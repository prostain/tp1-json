const fs = require('fs');
exports.create = function (req, res) {

	fs.readFile('../resultats.json', {encode: 'utf8', flag: "a+"}, function readFileCallback(err, data) {
		if (err) {
			console.log(err);
		} else {
			let resultats = recupJson(data);

			let retour = 'vide';
			let reponse = {
				name: req.body.name,
				choix: req.body.choix
			};

			let r = resultats.every((d) => {
				if (d.name !== reponse.name) {
					return true;
				} else {
					return false;
				}
			});

			if (r) {
				resultats.push(reponse);
				fs.writeFile("../resultats.json", JSON.stringify(resultats), 'utf8', function (err) {
					if (err) {
						console.log("An error occured while writing JSON Object to File.");
						return console.log(err);
					}
					console.log("JSON file has been saved.");
				});

				retour = `
						<div class="reponse" style="font-size: 4rem;">
							<strong>${reponse.name}</strong> ton choix est : ${reponse.choix}
						</div>
					`;
			} else {
				retour = `
						<div class="reponse" style="font-size: 4rem;">
							<strong>${reponse.name}</strong> tu ne pas pas modifier !
						</div>
					`;
			}

			res.end(retour);
		}
	});
};

function recupJson(d) {
	try {
		return JSON.parse(d);
	} catch (e) {
		return [];
	}
}
