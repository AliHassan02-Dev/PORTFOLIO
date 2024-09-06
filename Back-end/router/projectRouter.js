const express = require("express");
const projectRouter = express.Router();
const projectController = require("../controller/projectController");

projectRouter.route("/projectUpload").post(projectController.projectUpload);
projectRouter.route("/getAllProjects").get(projectController.getAllProjects);

module.exports = projectRouter;
