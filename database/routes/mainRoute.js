const express = require('express')
const route = express.Router()
const controller = require('../controllers/mainController')
route.get('/hope', controller.show)

module.exports = route