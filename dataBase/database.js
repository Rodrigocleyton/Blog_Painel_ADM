const Sequelize = require('sequelize')

const connetion = new Sequelize('guiapress', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connetion
