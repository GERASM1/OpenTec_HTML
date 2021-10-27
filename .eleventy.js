module.exports = function (eleventyConfig) {
    // Copy static assets over to _site directory.
    eleventyConfig.addPassthroughCopy('assets/css');
    eleventyConfig.addPassthroughCopy('assets/img');
    eleventyConfig.addPassthroughCopy('assets/js');
    eleventyConfig.addPassthroughCopy('assets/plugins');
    eleventyConfig.addPassthroughCopy('assets/fonts');
    // Return configuration object.
    return {
        passthroughFileCopy : true
    };
};