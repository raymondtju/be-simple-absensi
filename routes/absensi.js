const express = require('express')
const router = express.Router()
const absensiModel = require('../models/absensi')

// endpoint for main users (basic)
router.get('/',  async (req, res) => {
    const absensi = await absensiModel.findAll()
    res.status(200).json({
        absensi, 
        metadata: "absensi endpoint user"
    })
})

router.post('/checkin',  async (req, res) => {
    const {nip} = req.body
    const absensi = await absensiModel.create({
        users_nip: nip, status: 'in'
    })
    res.status(200).json({
        data: absensi, 
        metadata: "checkin successful"
    })
})

router.post('/checkout',  async (req, res) => {
    const {nip} = req.body
    const absensi = await absensiModel.create({
        users_nip: nip, status: 'out'
    })
    res.status(200).json({
        data: absensi, 
        metadata: "checkout successful"
    })
})

module.exports = router
