const express = require("express");
const empRoute = require("./employee");
const indexRoute = express.Router();
indexRoute.use("/emproute", empRoute);
module.exports = indexRoute;
