"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var paths_1 = require("./paths");
/**
 * Remove the extension from a file name (eg. "file.svg")
 * @param fileName {string} Filename string
 */
var removeFileExtension = function (fileName) {
    return fileName.replace(/\.[^/.]+$/, '');
};
/**
 * Get all the svg icons from the svg
 * source path and remove the file extension
 */
var iconsList = fs
    .readdirSync(paths_1.paths.svg)
    .map(function (icon) {
    if (icon.match(/\.svg$/i)) {
        return removeFileExtension(icon);
    }
    return undefined; // Додано явне повернення undefined
})
    .filter(function (icon) { return typeof icon === 'string'; });
/**
 * Define the Icon object constructor
 * to build the icon object schema
 * required by the theme
 * @param path {String} is the filename path
 */
var Icon = /** @class */ (function () {
    function Icon(path) {
        var iconName = '_file_' + path;
        this[iconName] = {
            iconPath: "./svg/".concat(path, ".svg"),
        };
    }
    return Icon;
}());
/**
 * For each files found in `iconsList`
 * call the Icon contructor and generate the
 * full json theme
 */
var icons = iconsList.reduce(function (acc, icon) {
    var iconFromSvg = new Icon(icon);
    acc.iconDefinitions = __assign(__assign({}, acc.iconDefinitions), iconFromSvg);
    return acc;
}, { iconDefinitions: {} });
exports.default = icons;
