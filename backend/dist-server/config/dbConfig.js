"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.databaseURL = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var dotend = _dotenv["default"].config();

var databaseURL = process.env.DB_URL;
exports.databaseURL = databaseURL;