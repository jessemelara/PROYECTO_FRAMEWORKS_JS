"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var ArticleSchema = Schema({
  title: String,
  content: String,
  date: {
    type: Date,
    "default": Date.now
  },
  image: String
});

var _default = _mongoose["default"].model('Article', ArticleSchema); // articles --> guarda documentos de este tipo y con estructura dentro de la coleccion


exports["default"] = _default;