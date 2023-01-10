const express = require("express");
const route = express.Router();
const loginController = require("../controllers/loginController");
route.get("/auth", loginController.show);
route.get("/", loginController.show);

module.exports = route;
