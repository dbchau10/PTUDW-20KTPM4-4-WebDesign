const express = require('express')
const route = express.Router()
const controller = require('../controllers/indexController')
route.get('/', controller.show)

module.exports = route