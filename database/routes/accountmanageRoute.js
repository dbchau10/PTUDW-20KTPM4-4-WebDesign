const express=require("express");
const router=express.Router();
const path = require('path');

//router.use(express.static('D:\\PTUDW-20KTPM4-4-WebDesign\\database\\static'))

router.use(express.static(path.join(__dirname, '..', 'static')))

router.use('/', require('./loginRoute'))
router.use('/', require('./signUpRoute'))
router.use('/', require('./signUpDetailsRoute'))
router.use('/', require('./forgetPasswordRoute'))

module.exports=router