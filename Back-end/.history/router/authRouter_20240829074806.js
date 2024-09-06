const express = require("express");
const router = express.router;
const authController = require("../controller/authController");

router.route("/").get(authController.home);

module.exports = router;
