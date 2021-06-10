"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _article = require("../models/article");

var validator = require('validator');

var fs = require('fs');

var path = require('path');

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
  },
  upload: function upload(req, res) {
    //Configurar el modulo connect multiparty en router/article.js
    //Recoger el fichero de la peticion
    var file_name = 'Imagen no subida...';

    if (!req.files) {
      return res.status(404).send({
        status: 'error',
        message: file_name
      });
    } //Conseguir el nombre y la extension del archivo


    var file_path = req.files.file0.path;
    var file_split = file_path.split('\\'); //Nombre del archivo

    var file_name = file_split[3]; //Extension del fichero

    var extension_split = file_name.split('\.');
    var file_ext = extension_split[1]; //Comprobar la extension (solo imagenes)

    if (file_ext != 'png' && file_ext != 'jpg' && file_ext != 'jpeg' && file_ext != 'gif') {
      //Borrar el fichero
      fs.unlink(file_path, function (err) {
        return res.status(200).send({
          status: 'error',
          message: 'La extension de la imagen no es valida'
        });
      });
    } else {
      //Si todo es valido
      var articleId = req.params.id; //Buscar el articulo, asignarle el nombre de la imagen y actualizarlo

      Article.findOneAndUpdate({
        _id: articleId
      }, {
        image: file_name
      }, {
        "new": true
      }, function (err, articleUpdated) {
        if (err || !articleUpdated) {
          return res.status(200).send({
            status: 'error',
            message: 'Error al guardar la imagen del articulo'
          });
        }

        return res.status(200).send({
          status: 'success',
          article: articleUpdated
        });
      });
    }
  },
  getImage: function getImage(req, res) {
    var file = req.params.image;
    var path_file = './src/upload/articles/' + file;
    fs.exists(path_file, function (exists) {
      if (exists) {
        return res.sendFile(path.resolve(path_file));
      } else {
        return res.status(404).send({
          status: 'error',
          message: 'La imagen no existe'
        });
      }
    });
  }
}; //end controller

var _default = controller;
exports["default"] = _default;