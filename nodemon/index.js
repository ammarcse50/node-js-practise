const http = require("http");
const fs = require("fs");
const port = 3000;

const hostname = "127.0.0.1";

const server = http.createServer((req, res) => {
  const handlereadFile = (filelocation, statuscode) => {
    fs.readFile(filelocation, (err, data) => {
      res.writeHead(statuscode, { "Content-Type": "text/html" });

      res.write(data);

      res.end();
    });
  };

  if (req.url === "/") {
    handlereadFile("index.html", 200);
  } else if (req.url === "/about") {
    handlereadFile("about.html", 200);
  } else if (req.url === "/home") {
    handlereadFile("home.html", 200);
  } else {
    handlereadFile("error.html", 404);
  }
});

server.listen(port, hostname, () => {
  console.log(`server is at http://${hostname}:${port}`);
});
