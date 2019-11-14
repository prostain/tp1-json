let app = new Vue({
	el: '#app',
	data: {
		resultats: []
	},
	created() {
		setInterval(this.recupResultats, 2000);
	},
	filters: {
		transforme(v) {
			if (v === 'jquery') {
				return 'jQuery';
			} else if (v === 'vanillajs') {
				return 'vanillaJS';
			} else {
				return v;
			}
		}
	},
	methods: {
		recupResultats() {
			let self = this;
			let url = "http://localhost/vuejs/contest_js/resultats.json?";
			url += Math.floor(Date.now() / 1000);
			fetch(url)
				.then(function (response) {
					return response.json();
				})
				.then(function (data) {
					self.resultats = data;
				});
		}
	}
});
