const express = require("express");
const studentRouter = express.Router();

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
  res.status(201).send("create new students here");
});

module.exports = studentRouter;
