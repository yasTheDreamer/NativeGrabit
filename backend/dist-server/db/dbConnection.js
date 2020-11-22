"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dbConfig = require("../config/dbConfig");

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// database setup
_mongoose["default"].connect(_dbConfig.databaseURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var db = _mongoose["default"].connection;
db.on("error", function () {
  console.log("error establishing database connection ...");
});
db.once("open", function () {
  console.log("database connection established");
});
var _default = db;
exports["default"] = _default;