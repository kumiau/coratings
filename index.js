// Import the page-mod API
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: /.*cinecolombia\.com\/pelicula.*/,
  contentScriptFile: ["./common.js", "./cine-colombia.js"],
  contentStyleFile: "./styles.css"
});

pageMod.PageMod({
  include: /.*cinemark\.com\.co\/newface\/detallepelicula\.aspx.*/,
  contentScriptFile: ["./common.js", "./cinemark.js"],
  contentStyleFile: "./styles.css"
});

pageMod.PageMod({
  include: /.*procinal\.com\.co\/pelicula.*/,
  contentScriptFile: ["./common.js", "./procinal.js"],
  contentStyleFile: "./styles.css"
});

pageMod.PageMod({
  include: /.*royal-films\.com\/pelicula_detalle\.php.*/,
  contentScriptFile: ["./common.js", "./royal-films.js"],
  contentStyleFile: "./styles.css"
});
