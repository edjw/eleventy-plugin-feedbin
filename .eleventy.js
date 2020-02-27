const feedbin = require("./feedbin");

module.exports = function(eleventyConfig) {
	eleventyConfig.addFilter('cleanURL', (url) => {
    	return new URL(url).hostname.replace("www.", "");
  	});

	eleventyConfig.addNunjucksAsyncShortcode("favorites", async() => {
		await feedbin.getAllFavorites()
		return '';
	});
	// return {
	// 	eleventyComputed: {
	// 		favorites: async favorites => await feedbin.getAllFavorites()
	// 	}
	// }
};
