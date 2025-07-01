# How NODEJS works :

<b>Node js have a Engine there is a Event Queue , Eventloop , Blockoing operation , non-blocking operation , thread pool ,</b>

### How complete Process work .

<b>there will be a client who will send an request to the Server , then Server takes it and add into the Event Queue (FIFO) . Then there will be Event Loop which will continiously watch on the Queue and separate the Blocking operation and non-Blocking operation , then if it's a non blocking operation then it will process then and there and return respone but if it's a Blocking operation then it will go to threadpool and assign each operation to each thread generally a machine have 4 thread , once the thread complete it's process and sent the respone then it will be assigned anohter task , which is not at all a scalable and better practice so we must use non-blocking operations . </b>

### Differnce between Module vs Packages

<b>There pacakge named as 'cat-me' and we use npm i cat-me before {const catMe = require('cat-me')}
At the same time we are not doing that before {const http = require('http')}

#### Question is Why ?

because http is a module and cat-me is a package . Modules are in-built in Node js but cat me is not so it's a package that's it .</b>

#### Let's Discuss the Difference ?

| Term        | What it means                                                                                                         |
| ----------- | --------------------------------------------------------------------------------------------------------------------- |
| **Module**  | A single file or folder with JavaScript code that can be imported (via `require()` or `import`).                      |
| **Package** | A directory with a `package.json` that may include multiple modules and metadata (name, version, dependencies, etc.). |

**Example** :- If we take the Express as example Express is both module and package . so when we do **{npm i express}** we install complete package a folder where all the meta data and all was there but when we do **{const express = require('express')}** here importing a module from that package . **Shortly every package is a module once we require but not every module is a package**

# Building First HTTP Server :

- **Very Firstly we need a HTTP module so we will require it**

```javascript
const http = require("http"); //? it's a in - built Node js module
```

- **then there is a method named as {createServer} in http module , using which we will create an server .**

```javascript
const myServer = http.createServer(); // this is the method
```

- **the createSeerver method ask for a callback to accept and send the request from the client and respond and the callback take 2 object {req , res}**
  - **req - this object will hold all the meta data and request from client**
  - **res - this object will craft the response of the server {res.end(message)} with the help of this it will send back to client**
  -  ```javascript
        const myServer = http.createServer((req, res) => {
        console.log(req);
        res.end(`Hello from Server`);
        });

- **Now we have to make sure the server is running and also listening on some port**

```javascript
    myServer.listen(3003, () => {
    console.log(`Server is running on 3003`);
    });
``` 

- **The callback here is not neccessary but it's for our idead or confirmation that it's running .**

## Let's create an Server Log 
     
- **Description:-** 
    - we will create an txt file where all the request from client to server will be registred {the time and a constant message .}

```javascript
const http = require("http"); //? it's a in - built Node js module
const fs = require('fs');
const myServer = http.createServer((req, res) => {
    const logs = `${Date.now()} Request accessed \n`
  fs.appendFile("logs.txt",logs ,(err,data)=>{
    res.end("request Logged");
  }) 
});

myServer.listen(3003, () => {
  console.log(`Server is running on 3003`);
});
```
- **Task for revision**
    - we have to add from which IP adress the request happened and log this into log.txt file .
