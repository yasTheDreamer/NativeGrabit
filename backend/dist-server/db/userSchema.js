"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var UserSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    required: true
  },
  fullName: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: false
  },
  telephone: {
    type: Number,
    required: false
  },
  email: {
    type: String,
    required: true
  },
  user_type: {
    type: Number,
    required: true
  },
  picture: {
    type: String,
    required: false
  },
  actif: {
    type: Number,
    required: false
  }
});

var _default = _mongoose["default"].model("User", UserSchema);

exports["default"] = _default;