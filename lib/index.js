const ShibeError = require("../errors/ShibeError");
const request = require("node-superfetch");

/**
 * Get a random shiba inu!
 * @param {number} [count] The amount of images to get.
 * @returns {Promise<string | string[]>} The image(s).
 */
exports.getShibe = async (count = 1) => {
	if (count < 1 || count > 100) {
		throw new ShibeError(
			"Count must be less than 100 or more than 1."
		);
	}
	const { body } = await request
		.get(`https://shibe.online/api/shibes?count=${count}`)
		.catch((err) => {
			throw new ShibeError(err);
		});
	if (count === 1) return body[0];
	return body;
};

/**
 * Get a random cat!
 * @param {number} [count] The amount of images to get.
 * @returns {Promise<string | string[]>} The image(s).
 */
exports.getCat = async (count = 1) => {
	if (count < 1 || count > 100) {
		throw new ShibeError(
			"Count must be less than 100 or more than 1."
		);
	}
	const { body } = await request
		.get(`https://shibe.online/api/cats?count=${count}`)
		.catch((err) => {
			throw new ShibeError(err);
		});
	if (count === 1) return body[0];
	return body;
};

/**
 * Get a random bird!
 * @param {number} [count] The amount of images to get.
 * @returns {Promise<string | string[]>} The image(s).
 */
exports.getBird = async (count = 1) => {
	if (count < 1 || count > 100) {
		throw new ShibeError(
			"Count must be less than 100 or more than 1."
		);
	}
	const { body } = await request
		.get(`https://shibe.online/api/birds?count=${count}`)
		.catch((err) => {
			throw new ShibeError(err);
		});
	if (count === 1) return body[0];
	return body;
};
