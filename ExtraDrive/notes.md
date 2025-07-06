## Important Point to be noted in this project : 

#### ✅ Details about Middleware : 
 - **Middleware even it's custom made or third-part or In-built it's by `Defailt` runs for `Every routes`**
 - **middleware takes 3 param which is mandatory `req` , `res`, `next()`**
 - **If we want any middleware only work for a specific routes then we can do , every kind of middleware lik `in-built` , `custom`,`third-part`**

```js
const express = require('express');
const morgan = require('morgan');
const app = express();

 
app.use(morgan('dev'));

app.set('view engine' , 'ejs');

app.use((req,res,next)=>{
    console.log(`Middleware detected!`);
    next();
});

app.get('/',(req,res,next)=>{
    console.log(`this is a custom middleware and i am on home page`)
},(req,res)=>{
    res.render('index')
})
app.get('/about',express.json(),(req,res)=>{
    res.json({
        message:'i am now on about page',
        note: 'this is a in built middleare we use '
    });
})
app.get('/profile',morgan('dev'),(req,res)=>{ //? Here we are using 'thirdpary' middlware
    res.send(`i am on profile page`);
}) 
app.listen(3001,()=>{
    console.log(`Server is also running on 3001`);
})
```

### 📌 How to handle the EJS FORM : 
``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hello World</h1>
    <form action="/get-form-data">
        <input type="text" placeholder="Enter username" name="username">
        <input type="email" placeholder="Enter Email" name="email">
        <input type="password" placeholder="Enter Password" name="password">
        <button>SUBMIT</button>
    </form>
</body>
</html>
``` 
```js
const express = require('express');
const app = express();

app.set('view engine' , 'ejs');

app.get('/',(req,res,next)=>{
    console.log(`this is a custom middleware and i am on home page`);
    next();
},(req,res)=>{
    res.render('index')
})

app.get('/get-form-data',(req,res)=>{
    console.log(req.query)
    res.send('data Recieved')
})

app.listen(3001,()=>{
    console.log(`Server is also running on 3001`);
})
```
> **SO AT FIRST WHEN WE WILL EXCUTE THIS CODE THEN EVERYTHING WILL WORKS FINE AS EXPECTED,BUT THE PORBLEM LIES HERE `http://localhost:3001/get-form-data?username=Hello&email=Hello%40gmail.com&password=HII` THE URL WE WILL GET WILL CONTAIN ALL THE INFORMATION LIKE OUR PASSWORD , USERNAME , EMAIL ETC.**

> to Avoid the above situation we should make the method from get to post and also mention this in the form's action attribute like mentioned below , also the data from the form will come through req.body not req.query anymore
```html  
<form action="/get-form-data" method="post">
```

> **if in the EJS/HTML file in the input field we will not mention the name attribute then we will always get the empty object in the `req.query`**
---
> **perfect code for the form submission here :**
``` js
const express = require('express');
const app = express();

app.set('view engine' , 'ejs');
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
```
---
### 📌 HOW TO CONNECT CSS AND JS FILE TO EJS :
> **Just like normal js and CSS link in HTML file, it also that simple . but just because there are some **`static files like CSS`** so we also have to use a built in middleware to render those Static file here is the middleware**
``` js
app.use(express.static('public'));
```
> **Follow index.ejs flle for codes.**
---
