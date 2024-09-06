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
  createdWith: [
    { html: { type: String } },
    { css: { type: String } },
    { js: { type: String } },
    { react: { type: String } },
    { wordpress: { type: String } },
    { node: { type: String } },
    { mongodb: { type: String } },
    { html: { type: String } },
    { html: { type: String } },
  ],
  links: [{ figma: { type: String } }, { website: { type: String } }],
  projectImage: {
    type: String,
    required: true,
  },
});

const Project = new mongoose.model("Project", projectSchema);

module.exports = Project;
