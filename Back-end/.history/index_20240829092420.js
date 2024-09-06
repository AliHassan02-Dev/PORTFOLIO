require("dotenv").config();
const express = require("express");
const cors = require("cors");
const authRouter = require("./router/authRouter");
const connectDB = require("./db");

const app = express();
const server = app;

app.use(cors());
app.use(express.json());
app.use("/api/", authRouter);

app.get("/", (req, res) => {
  res.status(200).send("HELLO");
});

connectDB().then(() => {
  server.listen(8080, () => {
    console.log("Server is Started");
  });
});
