const express = require("express");

const server = express();
const authRouter = require("../auth/auth-router.js");

server.use(express.json());

server.use("/api/auth", authRouter);
server.get("/", (req, res) => {
  res.send("Its alive!!");
});

module.exports = server;
