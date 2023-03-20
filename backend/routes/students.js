const express = require("express");
const studentRouter = express.Router();
const {
  getAllUsers,
  getUser,
  createUser,
} = require("../controllers/userController");

studentRouter.get("/", getAllUsers).get("/:id", getUser);

studentRouter.post("/new", express.json(), createUser);

module.exports = studentRouter;
