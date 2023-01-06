const fs = require('fs');
const http = require('http');
const url = require('url');

const server = http.createServer((req,res)=>{
    res.end("Hello from server")
});

const PORT = 8000;
server.listen(PORT,()=>{
    console.log(`Listening to port ${PORT}`);
});
