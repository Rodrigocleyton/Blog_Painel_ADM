const Sequelize = require('sequelize')

const connetion = new Sequelize('guiapress', 'root', 'suaSenha', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connetion
