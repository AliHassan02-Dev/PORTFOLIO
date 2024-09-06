require("dotenv").config();
const express = require("express");
const cors = require("cors");
const authRouter = require("./router/authRouter");
const projectRouter = require("./router/projectRouter");
const connectDB = require("./db");

const app = express();
const server = app;

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use("/api/", authRouter);
app.use("/api/", projectRouter);

app.get("/", (req, res) => {
  res.status(200).send("HELLO");
});

connectDB().then(() => {
  server.listen(8080, () => {
    console.log("Server is Started");
  });
});
