import controller from '../controllers/article';
var express = require('express');

const router = express();

//Rutas de prueba
router.post('/datos-curso', controller.datosCurso);
router.get('/test-controller', controller.test);

//Rutas para articulos
router.post('/save', controller.save);

export default router;