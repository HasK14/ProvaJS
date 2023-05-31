const express = require("express");
const userRouter = require("./routes/user");
const postRouter = require("./routes/post");

const server = express();

server.use(express.json());

server.use(userRouter);
server.use(postRouter);

module.exports = server;
