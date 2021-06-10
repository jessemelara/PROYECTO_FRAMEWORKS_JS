import controller from '../controllers/article';
var express = require('express');

const router = express();

//Rutas de prueba
router.post('/datos-curso', controller.datosCurso);
router.get('/test-controller', controller.test);

//Rutas para articulos
router.post('/save', controller.save);
router.get('/articles/:last?', controller.getArticles);
router.get('/article/:id', controller.getArticle);
router.put('/article/:id', controller.update);
router.delete('/article/:id', controller.delete);

export default router;