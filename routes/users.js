const express = require('express')
const router = express.Router()

// endpoint for main users (basic)
router.get('/', (req, res) => {
    res.status(200).json({
        data: "halo hai hais", 
        metadatasss: "endpoint user"
    })
})

module.exports = router