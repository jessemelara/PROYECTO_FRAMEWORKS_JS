"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var validator = require('validator');

var Article = require('../models/article');

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
  },
  save: function save(req, res) {
    //Recoger parametros con POST
    var params = req.body; //Validar datos (validator)

    try {
      var validate_title = !validator.isEmpty(params.title);
      var validate_content = !validator.isEmpty(params.content);
    } catch (err) {
      return res.status(200).send({
        message: 'Faltan datos por enviar'
      });
    }

    if (validate_title && validate_content) {
      //Crear el objeto a guardar
      //Asignar valores
      //Guardar el articulo
      //Devolver una respuesta
      return res.status(200).send({
        message: params
      });
    } else {
      return res.status(200).send({
        message: 'Los datos no son validos'
      });
    }
  }
}; //end controller

var _default = controller;
exports["default"] = _default;