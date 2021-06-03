"use strict";

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var mongoose = require('mongoose');

var port = 3900;
mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/api_rest_blog', {
  useNewUrlParser: true
}).then(function () {
  console.log('La conexión a la base de datos se ha realizado exitosamente'); //Crear servidor y ponerme a escuchar peticiones HTTP

  _app["default"].listen(port, function () {
    console.log('Servidor ejecutandose en http://localhost:' + port);
  });
});