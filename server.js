const http = require('http');
const namefier = require('name-fier');

const port = 2069;

const server = http.createServer((req, res) =>{
  const path = req.url.split('/');
  
  if(path[1]) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`<h1>${namefier.sillyfy(path[1])}</h1>`);
    res.end();
  } else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.write('<h1>Name not found!</h1>');
    res.end();
  }
})

server.listen(port, () => {
  console.log(`Server listening on port ${port}.`)
})