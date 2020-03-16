const mongoose = require('mongoose')
const Schema = mongoose.Schema

const genderSchema = new Schema({
    name: {
        type: String,
        required: true
    }
})

const Gender = new mongoose.model('Gender', genderSchema)

module.exports = Gender