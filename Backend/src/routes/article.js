import ArticleController from '../controllers/article';
import express from 'express';

let router = express.Router();

router.post('/datos-curso', ArticleController.datosCurso);
router.get('/test-controller', ArticleController.test);

export default router;