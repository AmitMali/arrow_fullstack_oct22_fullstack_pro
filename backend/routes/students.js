const express = require("express");
const studentRouter = express.Router();
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

const { isObjectValueofKeysEmpty } = require("../utils/utilityMethod");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      require: true,
      type: String,
    },
    userMail: {
      require: true,
      type: String,
    },
    userPassword: {
      require: true,
      type: String,
    },
    userCourse: {
      require: true,
      type: String,
    },
    gender: {
      require: true,
      type: String,
    },
  },
  { timestamps: true }
);
const userModel = mongoose.model("user", userSchema);
studentRouter
  .get("/", async (req, res) => {
    try {
      const users = await userModel.find();
      res.status(200).json(users);
    } catch (error) {
      res.json({ error: error.msg });
    }
  })
  .get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const users = await userModel.findById(id);
      res.status(200).json(users);
    } catch (error) {
      res.status(404).json({ error: error.msg });
    }
  });

studentRouter.use(express.json()).post("/new", async (req, res) => {
  if (!req.body) {
    res
      .status(400)
      .json({
        error:
          error.message || "Some error occured while reciving data from client",
      });
    return;
  }
  try {
    const newUser = await userModel.create(req.body);
    res.status(201).json({
      message: "data recive success",
      user: newUser,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = studentRouter;
