const Sequelize = require ('sequelize')

const sequelize = new Sequelize('seque_teste', 'root', 'ivaneteJC',{
    host: "localhost", 
    dialect: "mysql", 
})

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso")
}).catch(function(erro){
    console.log("Erro ao realiar conexão")
})

const Usuario = sequelize.define('usuarios',{
    nome:{
        type: Sequelize.STRING
    },
    sobrenome:{
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    }
})

Usuario.create({
    nome: "Guilherme",
    sobrenome: "Rodrigues",
    idade: 22
})
//Usuario.sync({force:true})