const express = require("express");
const { Model, model } = require("mongoose");
const userModel = require("../models/user.model");

const router = express.Router();

//? Register User 
router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const user = await userModel.create({ username, password });
  res.status(201).json({ message: "User registerd Successfully", user });
});


//? Login User
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const existedUser = await userModel.findOne({
    username: username,
  });
  if (!existedUser) {
    res.status(401).json({
      message: "No user Found",
    });
  }
  const validPassword = password == existedUser.password;
  if (!validPassword) {
    return res.status(401).json({
      message: "Invalid username or password",
    });
  }
  return res.status(200).json({ message: "User LoggedIn successfully" });
});



module.exports = router;
