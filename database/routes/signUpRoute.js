const express = require('express')
const route = express.Router()
const controller = require('../controllers/signUpController')
route.get('/SignUp', controller.show)

module.exports = route