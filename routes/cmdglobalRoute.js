const express = require("express");
const Router = express.Router();

const Cmdglobal = require("../controllers/CommandGlbController");

Router
.route("/")
.post(Cmdglobal.createCommand)


module.exports = Router;