const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Admin = new mongoose.model("Admin", AdminSchema);

module.exports = Admin;
