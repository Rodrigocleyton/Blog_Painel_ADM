const Sequelize = require("sequelize")
const connection = require("../dataBase/database")

//Definição do model categorias
const Category = connection.define('categories', {
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },slug: {
        type: Sequelize.STRING,
        allowNull: false
    }
    //slug é o endereço da categoria
})

module.exports = Category