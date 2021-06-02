'use strict'

//Cargar modulos de node para crear servidor
import express from 'express';
import { urlencoded, json } from 'body-parser';

//Ejecutar express (http)
var app = express();

//Cargar ficheros rutas

//Middlewares
app.use(urlencoded({extended:false}));
app.use(json());

//CORS

//Añadir prefijos a rutas

//Exportar modulo (fichero actual)
export default app;