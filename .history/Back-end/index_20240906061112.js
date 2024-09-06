require("dotenv").config();
const express = require("express");
const cors = require("cors");
const authRouter = require("./router/authRouter");
const projectRouter = require("./router/projectRouter");
const connectDB = require("./db");

const app = express();
const server = app;
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use("/api/", authRouter);
app.use("/api/", projectRouter);

app.get("/", (req, res) => {
  res.status(200).send("HELLO");
});

connectDB().then(() => {
  server.listen(port, () => {
    console.log("Server is Started");
  });
});
