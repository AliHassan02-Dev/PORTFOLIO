const home = (res, req) => {
  try {
    res.status(200).send("HELLOC");
  } catch (error) {
    console.log(error);
  }
};

module.exports = home;
