const Sequelize = require("sequelize")
const connection = require("../dataBase/database")

//Definição do model categorias
const Article = connection.define('articles', {
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNull : false
    }
    //slug é o endereço da categoria
})

module.exports = Article