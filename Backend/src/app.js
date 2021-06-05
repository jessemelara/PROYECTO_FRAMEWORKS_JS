//Cargar modulos de node para crear servidor
import express from 'express';
import { urlencoded, json } from 'body-parser';

//Ejecutar express (http)
var app = express();

//Cargar ficheros rutas
import article_routes from './routes/article';
//Middlewares
app.use(urlencoded({extended:false}));
app.use(json());

//CORS

//Añadir prefijos a rutas
app.use('/', article_routes);

//Ruta o metodo de prueba
app.get('/test', (req, res) => {

    return res.status(200).send({
        title: "Frameworks de JS",
        author: "Jesse Melara"
    });
});

//Exportar modulo (fichero actual)
export default app;