const express = require('express')
const route = express.Router()
const controller = require('../controllers/aboutUsController')
route.get('/AboutUs', controller.show)

module.exports = route