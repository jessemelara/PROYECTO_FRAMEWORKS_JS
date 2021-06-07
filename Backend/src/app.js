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