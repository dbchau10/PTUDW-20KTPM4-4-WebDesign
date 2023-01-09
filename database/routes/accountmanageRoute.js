const express=require("express");
const router=express.Router();

router.use('/', require('./loginRoute'))
router.use('/', require('./signUpRoute'))
router.use('/', require('./signUpDetailsRoute'))
router.use('/', require('./forgetPasswordRoute'))

module.exports=router