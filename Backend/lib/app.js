"use strict";

var _bodyParser = require("body-parser");

var _article = _interopRequireDefault(require("./routes/article"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//Cargar modulos de node para crear servidor
var express = require('express');

//Ejecutar express (http)
var app = express(); //Cargar ficheros rutas

//Middlewares
app.use((0, _bodyParser.urlencoded)({
  extended: false
}));
app.use((0, _bodyParser.json)()); //CORS

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
}); //Añadir prefijos a rutas

app.use('/api', _article["default"]); //Ruta o metodo de prueba

app.get('/test', function (req, res) {
  return res.status(200).send({
    title: "Frameworks de JS",
    author: "Jesse Melara"
  });
}); //Exportar modulo

module.exports = app;