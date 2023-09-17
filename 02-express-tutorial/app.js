const http = require('http');
const { readFileSync, readFile } = require('fs');

//get all files

const homePage = readFileSync('./navbar-app/index.html');
const server = http.createServer((req, res)=>{

    const URL = req.url;
    if(URL === '/'){
        res.writeHead(200, {'content-type':'text/html'});
        res.end(homePage);
    } else if (URL === '/about') {
        res.writeHead(200, {'content-type':'text/html'});
        res.end('<h1>About Page</h1>');
    } else {
        res.writeHead(400, {'content-type':'text/html'});
        res.write('<h1>Page not found</h1>');
        res.end();
    }



})



server.listen(8000);

