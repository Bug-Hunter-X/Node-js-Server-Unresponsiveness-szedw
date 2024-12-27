const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
};

const server = http.createServer(requestListener);

// keepAliveTimeout setting for better resource management
server.keepAliveTimeout = 10000;

server.listen(8080);