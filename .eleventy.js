module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("imagenes");
  eleventyConfig.addPassthroughCopy("favicon.png");

  // 👇 AÑADIMOS LA COLECCIÓN DE NOTICIAS
  eleventyConfig.addCollection("noticias", function(collectionApi) {
    return collectionApi.getFilteredByGlob("sections/noticias/*.md")
      .filter(item => item.inputPath !== 'sections/noticias/index.md'); // excluye la portada
  });

  return {
    dir: {
      input: ".",              // raíz del proyecto
      includes: "_includes",   // includes y layouts
      layouts: "_includes/layouts",
      output: "_site"          // carpeta de salida de Netlify
    }
  };
};
