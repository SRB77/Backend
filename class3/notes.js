const express = require("express");
const fs = require("fs/promises");
const PORT = 3009;

const Notes = express();

Notes.use(express.json());

Notes.get("/", (req, res) => {
  res.status(200).send("The Code is running on root route");
});

Notes.post("/notes", (req, res) => {
  const noteData = req.body;
  async function addNote() {
    try {
      await fs.appendFile("Notes.txt", JSON.stringify(noteData) + "\n");
      res
        .status(200)
        .send(`Notes added succefully ${JSON.stringify(noteData)}`);
    } catch (err) {
      res.status(404).send(`${err}`);
    }
  }
  addNote();
});

Notes.get("/allNotes", (req, res) => {
  async function getAllNotes() {
    try {
      const content = await fs.readFile("Notes.txt", "utf-8");
      res
        .status(200)
        .json({ message: "Retrive the Whole Notes", content: `${content}` });
    } catch (err) {
      res
        .status(400)
        .json({
          error: `${err}`,
          message: " May be some Error for getting the Content",
        });
    }
  }

  getAllNotes();
});

Notes.listen(PORT, () => {
  console.log(`Notes Server is running on ${PORT}`);
});
