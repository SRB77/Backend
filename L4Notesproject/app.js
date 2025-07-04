const express = require("express");
const app = express();
let notes = [];

//? Custom middleware!
/*function mylogger(req,res,next){
    console.log('LOGGED');
    next();
}
app.use(mylogger); */

app.use(express.json());
app.get("/", (req, res) => {
  res.send(`Welcome to the Notes Application ! `);
});
app.get("/getallnotes", (req, res) => {
  res.json(notes);
});

app.post("/createnotes", (req, res) => {
  notes.push(req.body);
  // console.log(notes);
  res.json({
    message: "Notes saved succesffully",
    notes: notes,
  });
});
//? This delete method is removing randome index 

app.delete("/deletenotes", (req, res) => {
  let index = Math.floor(Math.random() * notes.length);
  notes.splice(index, 1);
  res.json({
    message: `deleted element was at  ${index}`,
    notes: notes,
  });
});

//? This will take params from client Done . 

app.delete("/deletenotes/:index", (req, res) => {
  let index = req.params.index;
  notes.splice(index, 1);
  res.json({
    message: `deleted element was at  ${index}`,
    notes: notes,
  });
});

app.patch('/updatenotes/:index',(req,res)=>{
    let index = req.params.index;
    const {title} = req.body;
    notes[index].title = title
    res.json({
        message:"Notes updated successfully",
        notes:notes
    })
})

app.listen(3001, () => {
  console.log(`Server is running on 3001`);
});
