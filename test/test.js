const Shibe = require('../lib/index');

(async () => {
	const s = await Shibe.getShibe();
	const c = await Shibe.getCat();
	const b = await Shibe.getBird();
	console.log(s, c, b);
})();