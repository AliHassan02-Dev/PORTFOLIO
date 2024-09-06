require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require("./router/authRouter");
const connectDB = require("./db");

const app = express();
const server = app;

server.use(cors());
server.use(express.json());
server.use("/api/", router);

server.get("/", (req, res) => {
  res.status(200).send("HELLO");
});

connectDB().then(() => {
  server.listen(8080, () => {
    console.log("Server is Started");
  });
});
