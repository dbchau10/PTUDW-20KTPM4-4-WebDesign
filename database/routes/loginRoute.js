const express = require('express')
const route = express.Router()
const controller = require('../controllers/loginController')

route.get('/Login', controller.show)

module.exports = route;
