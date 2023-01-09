const express = require("express");
const route = express.Router();
const controller = require("../controllers/searchController");
route.get("/", controller.show);

module.exports = route;
