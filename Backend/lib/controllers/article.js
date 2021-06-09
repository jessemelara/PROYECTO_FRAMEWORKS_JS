"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _article2 = _interopRequireDefault(require("../models/article"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
        status: 'error',
        message: 'Faltan datos por enviar'
      });
    }

    if (validate_title && validate_content) {
      //Crear el objeto a guardar
      var _article = new Article(); //Asignar valores


      _article.title = params.title;
      _article.content = params.content;
      _article.image = null; //Guardar el articulo

      _article.save(function (err, articleStored) {
        if (err || !articleStored) {
          return res.status(404).send({
            status: 'error',
            message: 'El articulo no se ha guardado'
          });
        } //Devolver una respuesta


        return res.status(200).send({
          status: 'success',
          article: _article
        });
      });
    } else {
      return res.status(200).send({
        status: 'error',
        message: 'Los datos no son validos'
      });
    }
  },
  getArticles: function getArticles(req, res) {
    var query = Article.find({});
    var last = req.params.last;
    console.log(last);

    if (last || last != undefined) {
      query.limit(5);
    } //Find


    query.sort('-_id').exec(function (err, articles) {
      if (err) {
        return res.status(500).send({
          status: 'error',
          message: 'Error al devolver los articulos'
        });
      }

      if (!articles) {
        return res.status(404).send({
          status: 'error',
          message: 'No hay articulos'
        });
      }

      return res.status(200).send({
        status: 'success',
        articles: articles
      });
    });
  }
}; //end controller

var _default = controller;
exports["default"] = _default;