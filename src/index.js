const http = require('http');

const server = http.createServer((req,res)=>{
    console.log("Node server is starting at the port no 3000");
})
server.listen(3000);