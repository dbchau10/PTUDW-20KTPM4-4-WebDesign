const express = require('express')
const route = express.Router()
const controller = require('../controllers/userInfoController')
route.get('/UserInfo', controller.show)

module.exports = route