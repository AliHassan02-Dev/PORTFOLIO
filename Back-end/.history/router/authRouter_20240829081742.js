const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");

router.route("/auth").get(authController.home);
router.route("/auth/login").post(authController.login);

module.exports = router;
