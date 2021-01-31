declare module "shibe.online" {
	/**
	 * Get a random shiba inu!
	 * @param {number} [count] The amount of images to get.
	 * @returns {Promise<string | string[]>} The image(s).
	 */
	export function getShibe(count?: number): Promise<string | string[]>;

	/**
	 * Get a random cat!
	 * @param {number} [count] The amount of images to get.
	 * @returns {Promisestring | string[]>} The image(s).
	 */
	export function getCat(count?: number): Promise<string | string[]>;

	/**
	 * Get a random bird!
	 * @param {number} [count] The amount of images to get.
	 * @returns {Promisestring | string[]>} The image(s).
	 */
	export function getBird(count?: number): Promise<string | string[]>;
}
