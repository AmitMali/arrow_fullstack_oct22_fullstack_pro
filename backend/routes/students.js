const express = require("express");
const studentRouter = express.Router();
const bcrypt = require("bcrypt");
studentRouter
  .get("/", (req, res) => {
    res.status(200).send("show all students here");
  })
  .get("/course", (req, res) => {
    res.send(`load course info of student }`);
  })
  .get("/:id", (req, res) => {
    const { id } = req.params;
    res.send(`load info about student ${id}`);
  });

studentRouter.post("/new", (req, res) => {
  bcrypt.hash(req.body.userPassword, 10, (err, hashPassword) => {
    // req.body.userPassword = hashPassword;
    console.log(req.body);
  });
  res.status(201).json({
    message: "data recive success",
  });
});

module.exports = studentRouter;
