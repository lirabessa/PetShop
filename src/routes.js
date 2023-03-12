const {Router} = require ('express');
const funcionarioController = require ('./Controllers/funcionario/funcionarioControler')
const clienteController = require ('./Controllers/cliente/clienteController');


const routes = Router();

routes.get('/', (req,res) => {
    return res.status(200).json({message: "Servidor online"})
});

routes.post('/funcionario' , funcionarioController.create )
routes.get('/funcionarios' , funcionarioController.find)
routes.get('/funcionario/:id' , funcionarioController.findOne)
routes.delete('/funcionario/:id' , funcionarioController.destroy)
routes.put ('/funcionario/:id' , funcionarioController.update)
routes.post('/cliente' , clienteController.create)
routes.get('/clientes' , clienteController.find)
routes.get('/cliente/:id' , clienteController.findOne)
routes.delete('/cliente/:id' , clienteController.destroy)
routes.put('/cliente/:id' , clienteController.update)

module.exports = routes;