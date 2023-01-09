const express = require("express");
const router = express.Router();

const path = require("path");
router.use(express.static(path.join(__dirname, "..", "/static")));

router.use("/aboutUs", require("../aboutUsRoute"));
router.use("/detail", require("../detailRoute"));
router.use("/garage", require("../garageRoute"));
router.use("/payment", require("../paymentRoute"));
router.use("/search", require("../searchRoute"));
router.use("/userInfo", require("../userInfoRoute"));
router.use("/", require("../indexRoute"));

module.exports = router;
