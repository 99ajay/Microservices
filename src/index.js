// const http = require('http');
import http from 'http';
import  databaseConnection  from './database/connection.js';

const server = http.createServer(async(req,res)=>{
    await databaseConnection()
    console.log("Node server is starting at the port no 3000");
})
server.listen(3000);