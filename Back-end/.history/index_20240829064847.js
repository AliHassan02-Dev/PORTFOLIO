require("dotenv").config();
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const router = require("./router/authRouter");
const connectDB = require("./db");
const errorMiddleware = require("./middlewares/errorMiddleware");

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    method: ["GET", " POST"],
  },
});
exports.io = io;
exports.socket = io.socket;

// app.use(cors(corsOptions));
app.use(cors());
app.use(express.json());
app.use("/api/auth", router);
app.use(errorMiddleware);

app.get("/", (req, res) => {
  res.status(200).send("HELLO");
});

io.on("connection", (socket) => {
  console.log("User Connected", socket.id);
});

connectDB().then(() => {
  server.listen(8080, () => {
    console.log("Server is Started");
  });
});
