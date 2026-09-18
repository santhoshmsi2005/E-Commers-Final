const express = require("express");
const {RegisterController, LoginController, refreshController, LogoutController } = require("../../controller/users/AuthController");

const AuthRoutes = express.Router();

AuthRoutes.post("/login",LoginController);

AuthRoutes.post("/refresh",refreshController);

AuthRoutes.post("/register",RegisterController);  

AuthRoutes.post("/logout", LogoutController)

module.exports = AuthRoutes;