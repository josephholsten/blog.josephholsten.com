const yaml = require("js-yaml");

module.exports = eleventyConfig => {
    eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));
    eleventyConfig.addCollection("posts", function(collectionApi) {
        return collectionApi.getFilteredByGlob("_posts/*.md");
    });
    return {
        dir: {
            includes: "_includes",
            layouts: "_layouts"
        }
    }
};
