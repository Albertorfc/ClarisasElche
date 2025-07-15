module.exports = function(eleventyConfig) {
  // Archivos a copiar directamente al output
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("imagenes");
  eleventyConfig.addPassthroughCopy("favicon.png");

  // Colección personalizada: noticias (excluye index.md)
  eleventyConfig.addCollection("noticias", function(collectionApi) {
    return collectionApi.getFilteredByGlob("sections/noticias/*.md")
      .filter(item => !item.inputPath.includes("index.md"));
  });

  // Configuración principal
  return {
    dir: {
      input: ".",                     // Carpeta raíz del proyecto
      includes: "_includes",          // Carpeta con includes y layouts
      layouts: "_includes/layouts",   // Carpeta específica para layouts
      output: "_site"                 // Carpeta de salida
    },
    markdownTemplateEngine: "njk"     // ← Esto aplica layouts .njk a los .md
  };
};

