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
