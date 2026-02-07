// 1️⃣ Añadimos Luxon al principio
const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {

  // 🔒 Forzar zona horaria Europa/Madrid al leer fechas
  eleventyConfig.addGlobalData("eleventyComputed", {
    date: (data) => {
      if (typeof data.date === "string") {
        return DateTime
          .fromISO(data.date, { zone: "Europe/Madrid" })
          .toJSDate();
      }
      return data.date;
    }
  });

  // 2️⃣ Filtro de fecha bonita (ahora ya SIN desplazamientos)
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime
      .fromJSDate(dateObj, { zone: "Europe/Madrid" })
      .setLocale("es")
      .toFormat("cccc d 'de' LLLL 'de' yyyy 'a las' HH:mm");
  });

  // 3️⃣ Resto de configuración
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("imagenes");
  eleventyConfig.addPassthroughCopy("favicon.png");

  eleventyConfig.addCollection("noticias", function(collectionApi) {
    return collectionApi
      .getFilteredByGlob("sections/noticias/*.md")
      .filter(item => !item.inputPath.includes("index.md"));
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      layouts: "_includes/layouts",
      output: "_site"
    },
    markdownTemplateEngine: "njk"
  };
};
