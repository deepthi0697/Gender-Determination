const mongoose = require('mongoose')

const setupDB = function() {
    mongoose.connect('mongodb+srv://deepthi:*******@cluster0-7uxoi.mongodb.net/gender?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('connected to db')
        })
        .catch((err) => {
            console.log(err)
        })
}

module.exports = setupDB
