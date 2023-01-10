const express = require("express");
const router = express.Router();

const path = require("path");
router.use(express.static(path.join(__dirname, "..", "/static")));

router.use("/signUp", require("./signUpRoute"));
router.use("/signUpDetails", require("./signUpDetailsRoute"));
router.use("/forgetPassword", require("./forgetPasswordRoute"));
router.use("/", require("./loginRoute"));

module.exports = router;
