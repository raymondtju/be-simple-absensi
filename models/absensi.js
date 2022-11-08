const {Model, DataTypes} = require('sequelize')
const sequelize = require('../db.config')

// class user berfungsi untuk mengambil hal-hal yang ada pada Model
class Absensi extends Model { }

Absensi.init({
    // squelize auto generate id
    users_nip: {
        type: DataTypes.INTEGER,
    },
    status: {
        type: DataTypes.ENUM('in',  'out')
    }
}, {
    sequelize, 
    modelName: 'Absensi'
})

module.exports = Absensi