const bcrypt = require('bcrypt')
const UsersModel = require('../models/users')

const passwordCheck = async (nip, password) => {
    const isUserAva = await UsersModel.findOne({
        where: {nip: nip}
    })
    const compare = await bcrypt.compare(password, isUserAva.password)
    return {compare, isUserAva}
}

module.exports = passwordCheck