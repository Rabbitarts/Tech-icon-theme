"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paths = void 0;
var path = require("path");
exports.paths = {
    build: path.join(__dirname, '../build'),
    src: path.join(__dirname, '.'),
    svg: path.resolve(__dirname, '../build/svg'),
};
