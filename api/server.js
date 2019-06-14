const express = require("express");
const cors = require("cors");

const server = express();
const authRouter = require("../auth/auth-router.js");
const userRouter = require("../user/user-router.js");

server.use(express.json());
server.use(cors());

server.get("/", (req, res) => {
  res.send("Its alive!!");
});

server.use("/api/auth", authRouter);
server.use("/api/users", userRouter);

module.exports = server;
