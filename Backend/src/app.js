//Cargar modulos de node para crear servidor
const express = require('express');
import { urlencoded, json } from 'body-parser';

//Ejecutar express (http)
const app = express();

//Cargar ficheros rutas
import router from './routes/article';
//Middlewares
app.use(urlencoded({extended:false}));
app.use(json());

//CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//Añadir prefijos a rutas
app.use('/api', router);

//Ruta o metodo de prueba
app.get('/test', (req, res) => {

    return res.status(200).send({
        title: "Frameworks de JS",
        author: "Jesse Melara"
    });
});

//Exportar modulo
module.exports = app;