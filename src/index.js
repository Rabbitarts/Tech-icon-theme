"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs-extra");
var paths_1 = require("./paths");
var themeScheme_1 = require("./themeScheme");
/**
 * Build the icons theme and write the
 * theme file to the build path.
 */
var writeTheme = function (scheme) {
    fs.writeFile(
    // Pass the theme output path and filename
    "".concat(paths_1.paths.build, "/tech-icons.json"), 
    // Pass the icon theme scheme
    JSON.stringify(scheme, null, 3), function (err) {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Tech Icons has been generated');
    });
};
writeTheme(themeScheme_1.default);
