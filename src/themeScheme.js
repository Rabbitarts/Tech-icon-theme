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
var fileExtensions_1 = require("./declarations/fileExtensions");
var fileFolders_1 = require("./declarations/fileFolders");
var fileNames_1 = require("./declarations/fileNames");
var folderNames_1 = require("./declarations/folderNames");
var folderNamesExpanded_1 = require("./declarations/folderNamesExpanded");
var languageIds_1 = require("./declarations/languageIds");
var iconsDefinition_1 = require("./iconsDefinition");
/**
 * Define the icon theme json schema required
 * by vscode extensions api
 */
exports.default = __assign(__assign(__assign({}, iconsDefinition_1.default), fileFolders_1.fileFolders), { 
    // Push file extension declarations
    fileExtensions: fileExtensions_1.fileExtensions, 
    // Push file names declarations
    fileNames: fileNames_1.fileNames, 
    // Push folder names declarations
    folderNames: folderNames_1.folderNames, 
    // Push expanded folder names declarations
    folderNamesExpanded: folderNamesExpanded_1.folderNamesExpanded, 
    // Disable arrows beside folders
    hidesExplorerArrows: true, 
    // Push languages ids declarations
    languageIds: languageIds_1.languageIds });
