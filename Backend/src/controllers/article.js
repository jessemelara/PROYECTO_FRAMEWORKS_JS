let controller = {

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
    }
}; //end controller

export default controller;