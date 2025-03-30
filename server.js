const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200; // Default status code

    if (req.url === '/home') {
        res.setHeader('Content-Type', 'text/plain');
        res.end('Welcome home');
    } 
    else if (req.url === '/about') {
        res.setHeader('Content-Type', 'text/plain');
        res.end('Welcome to About Us');
    } 
    else if (req.url === '/node') {
        res.setHeader('Content-Type', 'text/plain');
        res.end('Welcome to my Node Js project');
    } 
    else {
        res.statusCode = 404; // Set status code to 404 for unknown URLs
        res.setHeader('Content-Type', 'text/plain');
        res.end('Page Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});