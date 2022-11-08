const express = require('express')
const cors = require('cors')
const port = 3333

const db = require('./db.config')
db.sync().then(() => console.log('database connected !'))

const userEndpoint = require('./routes/users')
const absensiEndpoint = require('./routes/absensi')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/users', userEndpoint)
app.use('/absensi', absensiEndpoint)

app.listen(port, () => console.log(`running server on port ${port}`)) 
