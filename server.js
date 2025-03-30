const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        const messages = fs.existsSync('usernames.txt') ? fs.readFileSync('usernames.txt', 'utf-8') : '';
        
        res.setHeader('Content-Type', 'text/html');
        res.end(`
            <div>${messages.split('\n').reverse().join('<br>')}</div>
            <form action="/submit" method="POST">
                <label>Name:</label>
                <input type="text" name="username">
                <button type="submit">Submit</button>
            </form>
        `);
    } 
    
    else if (req.url === '/submit' && req.method === 'POST') {
        let body = '';
        
        req.on('data', chunk => body += chunk);
        
        req.on('end', () => {
            const username = new URLSearchParams(body).get('username');
            
            if (username) {
                fs.appendFileSync('usernames.txt', `Username: ${username}\n`);
            }
            
            res.writeHead(302, { Location: '/' });
            res.end();
        });
    } 
    
    else {
        res.statusCode = 404;
        res.end('Page Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});