const express = require("express");
const router = express.Router();
const projectController = require("../controller/projectController");

router.route("/project").post(projectController.projectUpload);
