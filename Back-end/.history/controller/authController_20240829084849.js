const User = require("../model/User");

const home = async (req, res) => {
  try {
    res.status(200).send("HELLOC");
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });

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

const getUser = async (req, res) => {
  try {
    const getUser = await User.find({});
    return res.status(200).json(getUser);
  } catch (err) {
    console.error(err);
  }
};

const register = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userEmailExist = await User.findOne({ email });

    if (userEmailExist) {
      return res.status(400).json({ msg: "email already exists" });
    }

    const userCreated = await User.create({ email, password });

    res.status(201).json({
      msg: "registration successful",
      userId: userCreated._id.toString(),
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { home, login, getUser, register };
