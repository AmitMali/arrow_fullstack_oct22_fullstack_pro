const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    res.status(200).json(users);
  } catch (error) {
    res.json({ error: error.msg });
  }
};

const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const users = await userModel.findById(id);
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ error: error.msg });
  }
};

const createUser = async (req, res) => {
  if (!req.body) {
    res.status(400).json({
      error:
        error.message || "Some error occured while reciving data from client",
    });
    return;
  }
  try {
    const newUser = await userModel.create({
      ...req.body,
      userPassword: await bcrypt.hash(req.body.userPassword, 10),
    });
    res.status(201).json({
      message: "data recive success",
      user: newUser,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getAllUsers, getUser, createUser };
