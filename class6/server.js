require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT;
const connectToDB = require("./src/DB/db");
const noteModel = require("./src/models/note.model");
const e = require("express");
connectToDB();

const app = express();
app.use(express.json()); //* This is middleware .

app.get("/", (req, res) => res.send(`Chalo suru hua project`));

app.post("/notes", async (req, res) => {
  try {
    const { title, content } = req.body;
    await noteModel.create({ title, content });
    res.status(200).json({
      message: `Note created successfully ${title}`,
    });
  } catch (error) {
    res.send(`Got some error : ${error}`);
  }
});

app.get("/notes", async (req, res) => {
  try {
    const allNote = await noteModel.find();
    res.status(200).json({
      message: "all the notes here",
      allNote,
    });
  } catch (err) {
    res.status(404).send(`Got some error fetching all notes ${err}`);
  }
});

app.delete("/notes/:id", async (req, res) => {
  try {
    const noteId = req.params.id;
    await noteModel.deleteOne({
      _id: noteId,
    });
    res.status(200).json({
      message: "Note deleted Successfully ! ",
      noteId,
    });
  } catch (err) {
    res.status(404).send(`Got some error ${err}`);
  }
});

app.patch("/notes/:id", async (req, res) => {
  try {
    const noteId = req.params.id;
    const content = req.body.content;
    await noteModel.findOneAndUpdate(
      { _id: noteId },
      { content: content }
    );
    res
      .status(200)
      .json({ message: `Note updated successfully`,content });
  } catch (error) {
    res.status(404).send(`Error updating the note : ${error}`);
  }
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
