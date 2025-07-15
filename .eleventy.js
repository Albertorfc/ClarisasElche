// 1️⃣ Añadimos Luxon al principio
const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // 2️⃣ Añadimos el filtro personalizado de fecha bonita con día y hora
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime
      .fromJSDate(dateObj, { zone: 'Europe/Madrid' }) // Puedes cambiar a tu zona si hace falta
      .setLocale('es')
      .toFormat("cccc d 'de' LLLL 'de' yyyy 'a las' HH:mm");
  });

  // 3️⃣ Resto de tu configuración
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("imagenes");
  eleventyConfig.addPassthroughCopy("favicon.png");

  eleventyConfig.addCollection("noticias", function(collectionApi) {
    return collectionApi.getFilteredByGlob("sections/noticias/*.md")
      .filter(item => !item.inputPath.includes("index.md"));
  });

  return {
    dir: {
      input: ".",                     // Carpeta raíz del proyecto
      includes: "_includes",          // Carpeta con includes y layouts
      layouts: "_includes/layouts",   // Carpeta específica para layouts
      output: "_site"                 // Carpeta de salida
    },
    markdownTemplateEngine: "njk"
  };
};
