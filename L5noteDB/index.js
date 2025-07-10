const express = require("express");
const app = express();
require("dotenv").config();
const connectToDB = require("./src/DB/db");
const port = process.env.PORT;
//? Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//? ROUTES
connectToDB();
app.get("/", (req, res) => {
  res.send(`Welcome to the Notes aplication with DB`);
});
app.post("/createNote", (req, res) => {
  const { title, content } = req.body;
  res.json({
    title: title,
    content: content,
  });
  console.log(title, content);
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
