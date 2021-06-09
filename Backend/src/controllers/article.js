import article from '../models/article';

const validator = require('validator');
const Article = require('../models/article')

const controller = {

    datosCurso: (req, res) => {
        return res.status(200).send({
            curso: 'Master en Framewors de JS',
            author: 'Jesse Melara'
        });
    },

    test: (req, res) => {
        return res.status(200).send({
            message: 'Soy la accion test de mi controlador de articulos'
        });
    },

    save: (req, res) => {
        //Recoger parametros con POST
        const params = req.body;
        //Validar datos (validator)
        try{
            var validate_title = !validator.isEmpty(params.title);
            var validate_content = !validator.isEmpty(params.content);
        }catch(err){
            return res.status(200).send({
                status: 'error',
                message: 'Faltan datos por enviar'
            });
        }

        if(validate_title && validate_content){
            //Crear el objeto a guardar
            const article = new Article();

            //Asignar valores
            article.title = params.title;
            article.content = params.content;
            article.image = null;
            //Guardar el articulo
            article.save((err, articleStored) => {
                if(err || !articleStored){
                    return res.status(404).send({
                        status: 'error',
                        message: 'El articulo no se ha guardado'
                    });
                }
                //Devolver una respuesta
                return res.status(200).send({
                    status: 'success',
                    article
                });
            })
        }else {
            return res.status(200).send({
                status: 'error',
                message: 'Los datos no son validos'
            });
        }
    },

    getArticles: (req, res) => {
        const query = Article.find({})
        
        const last = req.params.last;
        console.log(last);
        
        if(last || last != undefined){
            query.limit(5)
        }

        //Find
        query.sort('-_id').exec((err, articles) => {
            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al devolver los articulos'
                });
            }
            
            if(!articles){
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay articulos'
                });
            }

            return res.status(200).send({
                status: 'success',
                articles
            });
        })
    }
}; //end controller

export default controller;