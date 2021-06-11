import controller from '../controllers/article';
var express = require('express');

const router = express();

const multipart = require('connect-multiparty');
const md_upload = multipart({ uploadDir: './src/upload/articles' });

//Rutas de prueba
router.post('/datos-curso', controller.datosCurso);
router.get('/test-controller', controller.test);

//Rutas para articulos
router.post('/save', controller.save);
router.get('/articles/:last?', controller.getArticles);
router.get('/article/:id', controller.getArticle);
router.put('/article/:id', controller.update);
router.delete('/article/:id', controller.delete);
router.post('/upload-image/:id', md_upload, controller.upload);
router.get('/get-image/:image', controller.getImage);
router.get('/search/:search', controller.search);

export default router;