const fs = require('fs');
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === '/overview' || pathName === '/') {
    res.end('This is the OVERVIEW');
  } else if (pathName === '/product') {
    res.end('This is the PRODUCT');
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html'
    });
    res.end('<h1>404 Page not found</h1>');
  }
});

server.listen(8000, () => {
  console.log('Listening on port 8000');
});
