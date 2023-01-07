const Sequelize = require('sequelize')

const connetion = new Sequelize('guiapress', 'root', 'senhaDB', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connetion
