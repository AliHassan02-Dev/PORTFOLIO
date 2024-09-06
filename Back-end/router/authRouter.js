const express = require("express");
const authRouter = express.Router();
const authController = require("../controller/authController");

authRouter.route("/auth/login").post(authController.login);
authRouter.route("/auth/register").post(authController.register);

module.exports = authRouter;
