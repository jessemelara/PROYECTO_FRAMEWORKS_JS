"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _article = _interopRequireDefault(require("../controllers/article"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var express = require('express');

var router = express(); //Rutas de prueba

router.post('/datos-curso', _article["default"].datosCurso);
router.get('/test-controller', _article["default"].test); //Rutas para articulos

router.post('/save', _article["default"].save);
router.get('/articles/:last?', _article["default"].getArticles);
router.get('/article/:id', _article["default"].getArticle);
router.put('/article/:id', _article["default"].update);
var _default = router;
exports["default"] = _default;