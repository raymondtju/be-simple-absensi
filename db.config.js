const { Sequelize } = require('sequelize')

const db = new Sequelize('absensi', 'root', '', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = db