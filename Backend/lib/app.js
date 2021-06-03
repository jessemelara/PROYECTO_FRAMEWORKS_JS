"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = require("body-parser");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//Cargar modulos de node para crear servidor
//Ejecutar express (http)
var app = (0, _express["default"])(); //Cargar ficheros rutas
//Middlewares

app.use((0, _bodyParser.urlencoded)({
  extended: false
}));
app.use((0, _bodyParser.json)()); //CORS
//Añadir prefijos a rutas

app.use('/', article_routes); //Ruta o metodo de prueba

app.get('/test', function (req, res) {
  return res.status(200).send({
    title: "Frameworks de JS",
    author: "Jesse Melara"
  });
}); //Exportar modulo (fichero actual)

var _default = app;
exports["default"] = _default;