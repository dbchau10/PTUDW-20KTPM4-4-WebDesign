const express = require('express')
const route = express.Router()
const controller = require('../controllers/detailController')
route.get('/Detail', controller.show)

module.exports = route