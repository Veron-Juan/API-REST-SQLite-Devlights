const express = require("express");
const userRoutes = require("./users");

const apiRoutes = express.Router();

apiRoutes.use("/users", userRoutes)

module.exports = apiRoutes