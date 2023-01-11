const Sequelize = require("sequelize")
const connection = require("../dataBase/database")
const Category = require("../categories/Category")

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
Category.hasMany(Article)//Uma categoria tem muitos artigos, relacionamento 1 p muitos
Article.belongsTo(Category)//Um artigo pertence a uma categoria, relacionamento 1 p 1

//sincronização do Banco, depois de executar retirar
Article.sync({force: true})
module.exports = Article