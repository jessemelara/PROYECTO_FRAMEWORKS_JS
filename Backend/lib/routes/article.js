"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _article = _interopRequireDefault(require("../controllers/article"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var express = require('express');

var router = express.Router();
router.post('/datos-curso', _article["default"].datosCurso);
router.get('/test-controller', _article["default"].test);
var _default = router;
exports["default"] = _default;