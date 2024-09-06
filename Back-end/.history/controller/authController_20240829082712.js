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
    const getUser = User.find({});
    return res.json(getUser).status(200);
  } catch (err) {
    console.error(err);
  }
};

module.exports = { home, login, getUser };
