const Funcionarios = require ('../../Modelos/funcionarioModel')

class funcionarioController {
    async create (req, res){
        try {
            const criarFuncionario = await Funcionarios.create(req.body);
        return res.status(201).json({message: "Funcionario criado :)"});
        } catch (error) {
            res.status(500).json({message: "erro"})
        }
    }

    async findOne (req, res){
        try {
            const {id} =req.params;
            const readFuncionario = await Funcionarios.findById(id);
            return res.status(302).json({readFuncionario})
        } catch (error) {
            res.status(404).json({message: "Não encontrado"}) 
        }
    }

    async find (req, res){

        try {
            const readFuncionarios = await Funcionarios.find();
            return res.status(302).json({readFuncionarios})
        } catch (error) {
            res.status(404).json({message: "Não encontrado"}) 
        }   
    }

    async destroy (req , res){
        try {
            const {id} = req.params;
            const deletarFuncionario = await Funcionarios.findByIdAndDelete(id);
            return res.status(200).json({message:"Funcionario deletado :("})
        } catch (error) {
            res.status(404).json({message: "Não encontrado"}) 
        }
    }

    async update (req , res){
        try {
            const {id} = req.params;
            const updateFuncionario = await Funcionarios.findByIdAndUpdate (id, req.body);
            return res.status(200).json({message: "Funcionario atualizado"})
        } catch (error) {
            res.status(404).json({message: "Não encontrado"}) 
        }
    }


}
module.exports = new funcionarioController();