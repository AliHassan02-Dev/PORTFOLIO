const express = require("express");
const projectRouter = express.Router();
const projectController = require("../controller/projectController");

projectRouter.route("/project").post(projectController.projectUpload);

module.exports = projectRouter;
