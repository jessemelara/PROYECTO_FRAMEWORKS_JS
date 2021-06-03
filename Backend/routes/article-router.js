import express from 'express';
import ArticleController from '../controllers/article-controller';

let router = express.Router();

router.post('/datos-curso', ArticleController.datosCurso);
router.get('/test-controller', ArticleController.test);

export default router;