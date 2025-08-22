// var catMe = require('cat-me');
// console.log(catMe());

// This is just a catMe package from npm website help us to learn how to install and use them 

//* Creating a Server using HTTP module

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
    // res.end(`Hello world `);
}); //> Yahan pe Server create ho gaya but abtak chalu nahi hua . 
Server.listen(3000,()=>{
    console.log(`Server is running on localhost:3000`);
})
//> Ab server Listen kar sakta hai client ka request but kuchh response nahi dega because not programmed for it yet . 
//> To start the server we just have to run `node index.js` in the terminal inside class1 directory . 

