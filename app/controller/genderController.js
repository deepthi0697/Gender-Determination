const Gender = require('../model/gender')
const express = require('express')
const route = express.Router()
const axios = require('axios')

route.get('/gender' ,(req,res)=> {
    const name = req.query.name
    axios.get(`https://api.genderize.io?name=${name}`)
                .then((response) => {
                    res.json(response.data)
                })
                .catch((err) => {
                    res.json(err)
                })
        })
        


module.exports = route

