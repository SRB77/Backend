const express = require("express");
const { Model, model } = require("mongoose");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

const router = express.Router();


//? Register User
router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const user = await userModel.create({ username, password });
  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET
  );
  res.cookie("token" , token); //> Set token into cookies . 
  return res.status(201).json({
     message: "User registerd Successfully",
      user,
    });
});

//? Login User
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const existedUser = await userModel.findOne({
    username: username,
  });
  if (!existedUser) {
    return res.status(401).json({
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

//? Get user with Access token 
router.get('/user' , async(req,res)=>{
  //> Get the Token
  //> Cheeck if we get the token or not
  //> If we get then Verify is it valid or not
  // const { token } = req.body;
  const { token } = req.cookies;
  if (!token) {
    return res.status(401).send(`unotherized user`);
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findOne({
      _id:decoded.id,
    })
    return res.status(200).json({
      message:"User is here with all the Data ",
      user
    })
    //* This decoded will contain the users data from the token ,if verified
  } catch (error) {
    return res.status(400).send(error);
    //! JsonWebTokenError: jwt malformed This error is for wrong format token
    //! JsonWebTokenError: invalid token This is for invalid token
  }   
})

module.exports = router;
