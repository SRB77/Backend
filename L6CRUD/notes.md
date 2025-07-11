# 📌 what is SCHEMA ? :
--- 
**A schema is a `format or structure` that defines how data will be stored in a database. It specifies the `fields, their data types (like string, number, date, etc.),` and any rules or `constraints` for the data. In databases, a schema acts like a `blueprint` for `organizing and validating` the data.**

---

## 📌 Process before CRUD operation : 
- **First we have to create an Folder named as `model` then model Files like `notes.model.js`**
- **Then `require mongoose` in the `notes.model.js` file .**
- **Will create an schema using `new mongoose.Schema({schema goes here })`**
- **Finally we will make a model using  `mongoose.model('name of model', schema{example noteSchema});`**

--- 

## 📌 Code For the CRUD operation : 

```js
app.get('/',(req,res)=>{
    res.send('Welcome to the Note application .');
});

app.post('/create', async(req,res)=>{
    const {title ,content} = req.body;
    console.log(`Title is : ${title} and Content is :  ${content}`);
    await noteModel.create({title,content})
    res.json({
        message:"Note created successfully "
    })
})

app.get('/getallnotes',async(req,res)=>{
    const notes = await noteModel.find()  //> Find method just Get all the data in the database .
    res.json({
        message: "Notes fetched Succesfully!",
        notes:notes 
    });
})

app.delete('/delnote/:id' , async(req,res)=>{
    let noteId = req.params.id;
    await noteModel.findOneAndDelete({
        _id:noteId
    })
    res.json({
        message:"Note deleted Succefully",
        noteId
    });

})

app.patch('/updatenote/:id',async(req,res)=>{
    const noteId = req.params.id 
    const {title,content}  = req.body 
    console.log(title , content);

    await noteModel.findOneAndUpdate({
        _id:noteId
    },{
        title:title,
        content:content
    })

    res.json({
        message:"Updated the Note Successfully",
        noteId
    })
})
```

--- 
> **There are some Usefull mongoDB methods to perform the CRUD operation and the naming convection is so damn easy than any of the SQL based Database we have to go through the code once / twice**