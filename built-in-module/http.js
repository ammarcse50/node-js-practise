const http = require("http");
const port = 3000;
const hostname = "127.0.0.1";

const server = http.createServer((req, res) => {
    res.writeHead(200,{'content-Type':'text/html'});

  res.write("<h1>hello</h1>");
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`your server is running at http://${hostname}:${port}`);
});
