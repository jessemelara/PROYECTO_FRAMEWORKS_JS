import ArticleController from '../controllers/article';
var express = require('express');

const router = express.Router();

router.post('/datos-curso', ArticleController.datosCurso);
router.get('/test-controller', ArticleController.test);

export default router;