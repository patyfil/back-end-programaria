const mongoose = require('mongoose')
// require('dotenv').config()

async function conectaBancoDeDados() {
    try {
        console.log('Conexão com o banco de dados iniciou')

        await mongoose.connect('mongodb+srv://patyfil:orWIDrQ4PAWLYHKB@clustermulheres.zo2evmk.mongodb.net/?retryWrites=true&w=majority')

        console.log('Conexão com o banco de dados feita com sucesso!')
    } catch(erro) {
        console.log(erro)
    }
}

module.exports = conectaBancoDeDados