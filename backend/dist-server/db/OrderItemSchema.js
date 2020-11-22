"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var OrderItemSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    required: true
  },
  order_id: {
    type: Schema.Types.ObjectId,
    ref: "Order"
  },
  item_id: {
    type: Schema.Types.ObjectId,
    ref: "Item"
  }
});

var _default = _mongoose["default"].model("OrderItem", OrderItemSchema);

exports["default"] = _default;