const express = require("express");
const router = express.Router();

const UsersController = require("../controllers/UsersController");

router
.route("/register")
.post(UsersController.handleRegister);

router
.route("/login")
.post(UsersController.handleLogin);

router
.route("/logout")
.post(UsersController.handleLogout);





module.exports = router;