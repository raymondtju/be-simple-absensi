const express = require('express')
const router = express.Router()
const UsersModel = require('../models/users')
const bcrypt = require('bcrypt')
const passwordCheck = require('../utils/passwordCheck')

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
    const encryptPassword = await bcrypt.hash(password, 10)

    const users = await UsersModel.create({
        nip, nama, password: encryptPassword
    })
    res.status(200).json({
        data: users, 
        metadatasss: "endpoint user" 
    })
})

router.put('/', async (req, res) => { //mengedit data
    const { nip, nama, password, passwordBaru } = req.body
    
    const check = await passwordCheck(nip, password)

    const encryptPassword = await bcrypt.hash(passwordBaru, 10)
    // res.json({
    //     compare
    // })

    if (check.compare === true){
        const users = await UsersModel.update({
            nama, password: encryptPassword
        }, {where: {nip: nip}})
        res.status(200).json({
            userName: users,
            toName: nama,
            metadata: "user updated!"
        })
    } else {
        res.status(400).json({
            "error": "invalid data"
        })
    }
})

router.post('/login', async(req, res) => {
    const { nip, password } = req.body
    try {
        const check = await passwordCheck(nip, password)
        
        if (check.compare === true){
            res.status(200).json({
                users: check.isUserAva,
                metadata: "login success!"
            })
        }
    } catch (e){
        res.status(400).json({
            error: "data invalid"
        })
    }
    

    
})

module.exports = router