const express = require("express");
const { isAthorized } = require("../middleware/authMiddleware");
const studentRouter = express.Router();
const {
  getAllUsers,
  getUser,
  createUser,
} = require("../controllers/userController");

studentRouter.use(isAthorized).get("/", getAllUsers).get("/:id", getUser);

studentRouter.post("/new", express.json(), createUser);

module.exports = studentRouter;
