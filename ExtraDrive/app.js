const express = require('express');
const app = express();

app.set('view engine' , 'ejs');
app.use(express.static('public'));
// app.use(express.json());
// app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.render('index')
})

app.post('/get-form-data',express.json(),express.urlencoded({extended:true}), (req,res)=>{
    console.log(req.body); //> Problem is here it will come undefined becasue the data is not coming in the JSON format 
    res.send('data Recieved')
})

app.listen(3001,()=>{
    console.log(`Server is also running on 3001`);
})