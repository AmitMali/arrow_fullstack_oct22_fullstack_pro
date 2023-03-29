const express = require("express");
const userRouter = express.Router();
const { getUserProfile } = require("../controllers/userController");

userRouter.get("/", getUserProfile);

module.exports = userRouter;
