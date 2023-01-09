const express = require("express");
const router = express.Router();
const emailController = require("../controllers/emailController.js");

router.get("/", emailController.send_email);

module.exports = router;
