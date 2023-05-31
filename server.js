const express = require("express");
const useRouter = require(".routes/user");
const postRouter = require("./routes/post");
const server = express();

server.use(express.json());

module.exports = server;
