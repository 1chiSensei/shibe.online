module.exports = class ShibeError extends Error {
	constructor(err) {
		super(`[ShibeError]: ${err}`);
	}
};
