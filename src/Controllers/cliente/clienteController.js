const Cliente = require ('../../Modelos/clienteModel')

class clienteController {
    async create (req, res){

        try {
        const criarCliente = await Cliente.create(req.body);
        return res.status(201).json({message:"Cliente criado :)"});
        } catch (error) {
            res.status(500).json({message: "erro"})
        }
    }

    async find (req, res){

        try {
            const readCliente = await Cliente.find();
            return res.status(302).json({readCliente})
        } catch (error) {
            res.status(404).json({message: "Não encontrado"})
        }
    }

    async findOne (req, res){

        try {
            const{id} = req.params
            const readCliente = await Cliente.findById(id);
            return res.status(302).json({readCliente})
        } catch (error) {
            res.status(404).json({message: "Não encontrado"})
        }
    }

    async destroy (req, res){

        try {
            const{id} = req.params
            const deletarCliente = await Cliente.findByIdAndDelete (id);
            return res.status(302).json({message: "Cliente deletado :("})
        } catch (error) {
            res.status(404).json({message: "Não encontrado"})
        }
    }

    async update (req, res){

        try {
            const{id} = req.params          
            const atualizarCliente = await Cliente.findByIdAndUpdate (id, req.body);
            return res.status(302).json({message: "Cliente Atualizado"})
        } catch (error) {
            res.status(404).json({message: "Não encontrado"})
        }
    }

}
module.exports = new clienteController();