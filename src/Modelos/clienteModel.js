const mongoose = require ('mongoose')

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Pet = new Schema(
  {
    idPet: ObjectId,
    nomeDep: String,
    raca: String
  }
);

const Cliente = new Schema(
    {
  idCli: ObjectId,
  nomeCli: String,
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
  cpf: String,
  dependentes: [Pet]
});


const Clientes = mongoose.model ('cliente', Cliente)

module.exports = Clientes