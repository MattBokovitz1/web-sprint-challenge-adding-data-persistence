const express = require("express");
const helmet = require("helmet");
const server = express();

const ProjectRouter = require("./project/router");
const ResourceRouter = require("./resource/router");
const TaskRouter = require("./task/router");

server.use(helmet());
server.use(express.json());

server.use("/api/projects", ProjectRouter);
server.use("/api/resources", ResourceRouter);
server.use("/api/tasks", TaskRouter);

module.exports = server;
