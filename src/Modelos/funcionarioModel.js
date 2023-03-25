const mongoose = require ('mongoose')

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Funcionario = new Schema(
    {
      idFunc: ObjectId,
      nomeFunc: String,
      endereço:{
        rua:String,
        bairro: String,
        cidade:String,
        estado:String,
        pais:String,
        cep: String
      },
      telefone:String,
      email:String,
      cpf: String
});

const Funcionarios = mongoose.model ('funcionario', Funcionario)

module.exports = Funcionarios

