const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  projecName: {
    type: String,
    required: true,
  },
  projectDesc: {
    type: String,
    required: true,
  },
  createdWith: {
    type: Array,
    required: true,
  },
  links: {
    type: Array,
    required: true,
  },
  projectImage: {
    type: String,
    required: true,
  },
});

const Project = new mongoose.model("Project", projectSchema);

module.exports = Project;
