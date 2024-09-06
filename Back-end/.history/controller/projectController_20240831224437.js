const Project = require("../model/ProjectUpload");

const projectUpload = async (req, res) => {
  try {
    const { projectName, projectDesc, createdWith, links, projectImage } =
      req.body;

    const projectUploaded = await Project.create({
      projectName,
      projectDesc,
      createdWith,
      links,
      projectImage,
      projectThumbnail,
    });

    res.status(200).json({
      msg: "Project Uploaded Successfully",
      userId: projectUploaded._id.toString(),
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllProjects = async (req, res) => {
  try {
    const getProject = await Project.find({});
    res.status(200).json(getProject);
  } catch (error) {
    console.error(error);
  }
};

module.exports = { projectUpload, getAllProjects };
