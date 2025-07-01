const http = require('http');  //? it's a module 

// const catMe = require('cat-me'); //? It's a package .
// console.log(catMe());


/*
There pacakge named as 'cat-me' and we use npm i cat-me before {const catMe = require('cat-me')} 
At the same time we are not doing that before {const http = require('http')}
Question is Why ? 
because http is a module and cat-me is a package . Modules are in-built in Node js but cat me is not so it's a package that's it .
*/

const Server = http.createServer((req,res)=>{
    res.end("Hello from the Server !");
}) //? Server creation Done .
Server.listen(3000,()=>console.log(`Server is running on port 3000`));