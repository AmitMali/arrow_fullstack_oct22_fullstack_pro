const express = require("express");

const authRouter = express.Router();

const { loginUser } = require("../controllers/authController");

authRouter.post("/login", loginUser);

module.exports = authRouter;
