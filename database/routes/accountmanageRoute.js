const express = require("express");
const router = express.Router();

const path = require("path");
router.use(express.static(path.join(__dirname, "..", "/static")));

router.use("/signUpRoute", require("./signUpRoute"));
router.use("/signUpDetailsRoute", require("./signUpDetailsRoute"));
router.use("/forgetPasswordRoute", require("./forgetPasswordRoute"));
router.use("/", require("./loginRoute"));

module.exports = router;
