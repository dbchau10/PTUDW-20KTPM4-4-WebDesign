const express = require("express");
const route = express.Router();
const controller = require("../controllers/aboutUsController");
route.get("/", controller.show);

module.exports = route;
