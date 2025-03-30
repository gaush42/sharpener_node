const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if(req.url==='/'){
        res.setHeader('Content-Type','text/html');
        res.end(
            `
            <form>
            <label>Name:</label>
            <input type="text" name="username"></input>
            </form>
            `
        )
    }
    
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});