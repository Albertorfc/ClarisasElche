module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("imagenes");
  eleventyConfig.addPassthroughCopy("favicon.png");

  eleventyConfig.addCollection("noticias", function(collectionApi) {
    return collectionApi.getFilteredByGlob("sections/noticias/*.md")
      .filter(item => !item.inputPath.includes("index.md"));
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      layouts: "_includes/layouts",
      output: "_site"
    }
  };
};
