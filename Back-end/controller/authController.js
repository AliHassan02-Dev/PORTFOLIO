const Admin = require("../model/Admin");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await Admin.findOne({ email });

    if (!userExist) {
      return res.status(404).json({ msg: "Invalid Credentials" });
    }

    if (userExist) {
      res.status(200).json({
        msg: "Login successful!",
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ msg: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json("Internal server Error");
  }
};

const register = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userEmailExist = await Admin.findOne({ email });

    if (userEmailExist) {
      return res.status(400).json({ msg: "email already exists" });
    }

    const userCreated = await Admin.create({ email, password });

    res.status(201).json({
      msg: "registration successful",
      userId: userCreated._id.toString(),
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { login, register };
