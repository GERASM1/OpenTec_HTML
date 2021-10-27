module.exports = function (eleventyConfig) {
    // Copy static assets over to _site directory.
    eleventyConfig.addPassthroughCopy('assets/css');
    eleventyConfig.addPassthroughCopy('assets/img');
    eleventyConfig.addPassthroughCopy('assets/js');
    // Return configuration object.
    return {
        passthroughFileCopy : true
    };
};