const express = require('express')
const router = express.Router()
const UsersModel = require('../models/users')

// endpoint for main users (basic)
router.get('/',  async (req, res) => {
    const users = await UsersModel.findAll()
    res.status(200).json({
        data: users, 
        metadata: "endpoint user"
    })
})

router.post('/', async (req, res) => {
    // const nip = req.body.nip
    // const nama = req.body.password
    // const password = req.body.password
    const { nip, nama, password } = req.body

    const users = await UsersModel.create({
        nip, nama, password
    })
    res.status(200).json({
        data: users, 
        metadatasss: "endpoint user" 
    })
})

router.put('/', async (req, res) => { //mengedit data
    const { nip, nama, password, passwordBaru } = req.body
    const isUserAva = await UsersModel.findOne({where: {nip: nip}})

    if (isUserAva.password === password){
        const users = await UsersModel.update({
            nama, password: passwordBaru
        }, {where: {nip: nip}})
        res.status(200).json({
            userName: isUserAva.nama,
            toName: nama,
            metadata: "user updated!"
        })
    } else {
        res.status(400).json({
            "error": "invalid data"
        })
    }
})

module.exports = router