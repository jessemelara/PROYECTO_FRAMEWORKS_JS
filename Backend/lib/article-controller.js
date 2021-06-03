"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var controller = {
  datosCurso: function datosCurso(req, res) {
    return res.status(200).send({
      curso: 'Master en Framewors de JS',
      author: 'Jesse Melara'
    });
  },
  test: function test(req, res) {
    return res.status(200).send({
      message: 'Soy la accion test de mi controlador de articulos'
    });
  }
}; //end controller

var _default = controller;
exports["default"] = _default;