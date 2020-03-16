const express = require('express')
const app = express()
const PORT = 3034
const setupDB = require('./config/database')
const route = require('./app/controller/genderController')
const cors = require('cors')



app.use(express.json())
app.use(cors())
app.use('/',route)

setupDB()


app.listen(PORT, () => {
    console.log('connected to ', PORT)
})