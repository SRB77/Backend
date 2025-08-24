## DIFFERENCE BETWEEN NODE AND BROWSER 
--- 
Both have different Roles and responsibility so accordingly they have some built in features for them selves . ```  Both are built in with the help of V8 engine , but V8 enginee is powering to differnt tools ``` . Browser is like Chair , steering , etc. part of a car but the Node is a specific run time where there is no steering , no chair , no lights and etc , only a built in V8 enginee and a format through which we can built any kind of Application . 

--- 

## What is NodeJS (interview)
---

### ✅ What is Node.js?

Node.js is a **JavaScript runtime environment** built on Google's **V8 engine** that executes JavaScript code on the server side. It enables JavaScript, traditionally a client-side language, to interact with a machine's operating system, file system, and network, making it suitable for backend development.


### Advantages

The core advantage of Node.js is its **asynchronous, non-blocking I/O model**.

* **Asynchronous I/O:** When Node.js performs a high-latency operation, such as a database query or a file read, it doesn't wait for the response. Instead, it places the operation on an event queue and immediately moves on to process the next task.
* **Event Loop:** A single-threaded **Event Loop** constantly monitors this queue. Once an asynchronous operation completes, its callback function is pushed to a call stack for execution. This mechanism allows Node.js to handle a massive number of concurrent connections efficiently without creating a new thread for each one. This contrasts with traditional server models that use multiple threads, which can consume significant memory and CPU resources.

### Use Cases

Node.js is ideal for building highly scalable applications that handle many concurrent connections, such as:

* **REST APIs & Microservices**
* **Real-time applications** (chat, live updates)
* **Streaming services**
---

## 💽 Difference between Package and Module ? 
---
`A module is a single file of code.` It's the smallest, most fundamental unit of code organization. You write a module to group related functions, variables, or classes into one file.

`A package is a folder` that contains `one or more modules` and a special file called `package.json`. It's a way to bundle and share a collection of related modules, often with a specific purpose.

Now, let's look at your examples. The `http module` is a built-in Node.js module because it is a single file of core functionality that comes with `Node.js` itself. You don't have to download it; it's always there.

On the other hand, `cat-me` is a `package`. It's a bundle of files—at least a `package.json` file and probably one or more .js files (the modules). You have to download it from a central registry, like npm, to use it in your project.

---
## WHAT IS A SERVER 
--- 

🚀 **A server is a computer or a program that provides a service to another computer program and its user, also known as the client. Its primary job is to listen for requests from a client, process that request, and send a response back. For a backend developer, a server is the foundation of an application that handles things like storing data, running business logic, and authenticating users.___✅(Server is a program , which have certain rules or Task to do )**

## 💯 How to built an SERVER with HTTP module . 

```javascript 
const HTTP = require('http');
const Server = HTTP.createServer(); //> Yahan pe Server create ho gaya but abtak chalu nahi hua . 
Server.listen(3000,()=>{
    console.log(`Server is running on localhost:3000`);
})
//> Ab server Listen kar sakta hai client ka request but kuchh response nahi dega because not programmed for it yet . 
//> To start the server we just have to run `node index.js` in the terminal inside class1 directory . 
```
--- 
```javascript 
const HTTP = require('http');
const Server = HTTP.createServer((req,res)=>{
    console.log(req.url);
    if(req.method === "GET" && req.url === '/'){
        res.end("Welcome to HTTP server homepage");
    }
    else if(req.method === "GET" && req.url === '/about'){
        res.end('Hey it"s about The Server of HTTP and routs');
    }
    else{
        res.end(`404 NOT FOUND `);
    }
    // res.end(`Hello world `); //> Try to uncomment and see What's happening 
}); 
Server.listen(3000,()=>{
    console.log(`Server is running on localhost:3000`);
})
```

> **So basically with the help of `HTTP` we can do whatever we want exactly like shown above but everything would be `manual` and `so messy` like above we can create `any route` any response everything within the `HTTP`**

> **`Express` simply uses `HTTP apis` under the hood and provide us better `syntax` and more `automated tools` for better experience** 
--- 

**END HERE**
