"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _articleController = _interopRequireDefault(require("./article-controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.post('/datos-curso', _articleController["default"].datosCurso);
router.get('/test-controller', _articleController["default"].test);
var _default = router;
exports["default"] = _default;