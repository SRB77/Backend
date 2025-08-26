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
      res.status(400).json({
        error: `${err}`,
        message: " May be some Error for getting the Content",
      });
    }
  }

  getAllNotes();
});

Notes.patch("/EditNotes", (req, res) => {
  const {Title,Desc} = req.body;
  async function editNotes() {
    try {
      const allNotes = await fs.readFile('Notes.txt','utf-8');
      const noteStrings = allNotes.trim().split('\n');
      const noteObjArr = noteStrings.map(obj=> JSON.parse(obj));
      const newNoteObjArr = noteObjArr.map((notes) =>{
        if(notes.Title === Title){
          return {"Title":Title , "Desc":Desc}
        }else return notes;
      })
      const realUpdatedData = newNoteObjArr.map(note => JSON.stringify(note)).join("\n");

      await fs.writeFile("Notes.txt",realUpdatedData + "\n");
      res.status(200).send(`Note ${Title} was updated successfully`);
    } catch (err) {
      res.status(404).send(`An error occured : ${err}`);
    }
  }
  editNotes();
});






















































Notes.listen(PORT, () => {
  console.log(`Notes Server is running on ${PORT}`);
});
