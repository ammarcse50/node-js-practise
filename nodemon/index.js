const http = require("http");
const fs = require('fs')
const port = 3000;

const hostname = "127.0.0.1";

const server = http.createServer((req, res) => {
 
    if(req.url==='/'){

    fs.readFile('index.html', (err,data)=>{

        res.writeHead(200,{'Content-Type':'text/html'});

        res.write(data)

        res.end();

    })
    }
   else if(req.url==='/about'){

        fs.readFile('about.html', (err,data)=>{
    
            res.writeHead(200,{'Content-Type':'text/html'});
    
            res.write(data)
    
            res.end();
    
        })
        }
   

});

server.listen(port, hostname, () => {
  console.log(`server is at http://${hostname}:${port}`);
});
