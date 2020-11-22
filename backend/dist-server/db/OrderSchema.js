"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var OrderSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  customerId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  courierId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  time: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  cost: {
    type: Number,
    required: true
  },
  source: {
    type: String,
    required: true
  },
  destination: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  }
});

var _default = _mongoose["default"].model("Order", OrderSchema);

exports["default"] = _default;