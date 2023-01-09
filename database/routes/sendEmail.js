const express = require('express');
const router = express.Router();
const emailController = require('../controllers/emailController.js');

router.get('/:to_email/:content', emailController.send_email);


module.exports = router;