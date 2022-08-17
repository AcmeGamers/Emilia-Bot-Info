// use node to use local server without packages

// load index.html and commands.html

var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, res) {
    // read index.html
    fs.readFile("./index.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  })
  .listen(8080);

console.log("Server running at http://localhost:8080/");
