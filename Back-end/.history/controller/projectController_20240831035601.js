const Project = require("../model/ProjectUpload");

const projectUpload = async (req, res) => {
  try {
    const { projectName, projectDesc, createdWith, links, projectImages } =
      req.body;

    const projectUploaded = await Project.create({
      projectName,
      projectDesc,
      createdWith,
      links,
      projectImage,
    });

    res.status(200).json({
      msg: "Project Uploaded Successfully",
      userId: projectUploaded._id.toString(),
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { projectUpload };
