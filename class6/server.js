require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT;
const connectToDB = require("./src/DB/db");
const noteModel = require("./src/models/note.model");
connectToDB();

const app = express();
app.use(express.json()); //* This is middleware .

app.get("/", (req, res) => res.send(`Chalo suru hua project`));

app.post("/notes", async (req, res) => {
  const { title, content } = req.body;
  await noteModel.create({ title, content });
  res.status(200).json({
    message:`Note created successfully ${title}`,
  });
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
