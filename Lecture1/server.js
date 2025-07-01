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
