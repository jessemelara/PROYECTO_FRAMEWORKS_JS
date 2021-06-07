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
                message: 'Faltan datos por enviar'
            });
        }

        if(validate_title && validate_content){
            //Crear el objeto a guardar

            //Asignar valores

            //Guardar el articulo

            //Devolver una respuesta
            return res.status(200).send({
                message: params,
            });
        }else {
            return res.status(200).send({
                message: 'Los datos no son validos'
            });
        }
    }
}; //end controller

export default controller;