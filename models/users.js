const {Model, DataTypes} = require('sequelize')
const sequelize = require('../db.config')

// class user berfungsi untuk mengambil hal-hal yang ada pada Model
class User extends Model { }

User.init({
    // squelize auto generate id
    nip: {
        type: DataTypes.INTEGER,
        unique: true
    },
    nama: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
}, {
    sequelize, 
    modelName: 'User'
})

module.exports = User