const Shibe = require('../lib/index');

(async () => {
	const sh = await Shibe.getShibe();
	const ca = await Shibe.getCat();
	const bi = await Shibe.getBird();
	console.log(sh, ca, bi);
})();
