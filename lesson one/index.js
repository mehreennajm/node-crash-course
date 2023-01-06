const fs = require('fs');
const http = require('http');
const url = require('url');

const server = http.createServer((req,res)=>{
    const pathName = req.url;
    if(pathName == '/'){
        res.end("This is Home Page");
    }
    else if(pathName == '/about'){
        res.end("This is About Page");
    }
    else if( pathName == '/products'){
        res.end("This is the products page");
    }
    else {
        res.writeHead(404,{
            'Content-type' : 'text/html',
            'my-own-header': 'hello-world'
        });
        res.end("<h1>Page Not Found</h1>");
    }
   
});

const PORT = 8000;
server.listen(PORT,()=>{
    console.log(`Listening to port ${PORT}`);
})
