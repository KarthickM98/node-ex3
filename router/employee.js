const express = require("express");
const route = express.Router();
const routerData = require("../Controller/Employee");
route.route("/employee").post(routerData);
module.exports = route;
