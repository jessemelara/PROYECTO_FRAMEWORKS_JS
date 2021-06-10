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
        status: 'error',
        message: 'Faltan datos por enviar'
      });
    }

    if (validate_title && validate_content) {
      //Crear el objeto a guardar
      var article = new Article(); //Asignar valores

      article.title = params.title;
      article.content = params.content;
      article.image = null; //Guardar el articulo

      article.save(function (err, articleStored) {
        if (err || !articleStored) {
          return res.status(404).send({
            status: 'error',
            message: 'El articulo no se ha guardado'
          });
        } //Devolver una respuesta


        return res.status(200).send({
          status: 'success',
          article: article
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
          message: 'No hay articulos para mostrar'
        });
      }

      return res.status(200).send({
        status: 'success',
        articles: articles
      });
    });
  },
  getArticle: function getArticle(req, res) {
    //Recoger el id de la url
    var articleId = req.params.id; //Comprobar que existe

    if (!articleId || articleId == null) {
      return res.status(404).send({
        status: 'error',
        message: 'No existe el articulo'
      });
    } //Buscar el articulo


    Article.findById(articleId, function (err, article) {
      if (err || !article) {
        return res.status(404).send({
          status: 'error',
          message: 'No hay articulos para mostrar'
        });
      } //Devolverlo en json


      return res.status(200).send({
        status: 'success',
        article: article
      });
    });
  },
  update: function update(req, res) {
    //Recoger el id por la url
    var articleId = req.params.id; //Recoger los datos que llegan por put

    var params = req.body; //Validar datos

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
      //Find & update
      Article.findOneAndUpdate({
        _id: articleId
      }, params, {
        "new": true
      }, function (err, articleUpdated) {
        if (err) {
          return res.status(500).send({
            status: 'error',
            message: 'Error al actualizar'
          });
        }

        if (!articleUpdated) {
          return res.status(404).send({
            status: 'error',
            message: 'El articulo no existe'
          });
        }

        return res.status(200).send({
          status: 'success',
          article: articleUpdated
        });
      });
    } else {
      //Devolver respuesta
      return res.status(200).send({
        status: 'error',
        message: 'La validacion no es correcta'
      });
    }
  },
  "delete": function _delete(req, res) {
    //Recoger el id de la url
    var articleId = req.params.id; //Find & delete

    Article.findOneAndDelete({
      _id: articleId
    }, function (err, articleRemoved) {
      if (err) {
        return res.status(500).send({
          status: 'error',
          message: 'Error al eliminar articulo'
        });
      }

      if (!articleRemoved) {
        return res.status(404).send({
          status: 'error',
          message: 'No se ha eliminado el articulo, posiblemente no exista'
        });
      }

      return res.status(200).send({
        status: 'success',
        article: articleRemoved
      });
    });
  }
}; //end controller

var _default = controller;
exports["default"] = _default;