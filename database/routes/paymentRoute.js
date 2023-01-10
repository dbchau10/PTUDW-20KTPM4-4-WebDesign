const express = require("express");
const route = express.Router();
const controller = require("../controllers/paymentController");
route.get("/", controller.show);

module.exports = route;
