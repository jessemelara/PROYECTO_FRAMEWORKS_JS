'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3900;

mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/api_rest_blog',{useNewUrlParser: true})
        .then(() => {
            console.log('La conexión a la base de datos se ha realizado exitosamente');

            //Crear servidor y ponerme a escuchar peticiones HTTP
            app.listen(port, () => {
                console.log('Servidor ejecutandose en http://localhost:'+port);
            });
        })