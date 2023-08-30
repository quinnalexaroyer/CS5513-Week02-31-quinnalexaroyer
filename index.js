const http = require("http");
const fs = require("fs").promises;

const requestListener = function(req, resp) {
  console.log(req.url);
  if (req.url === "/") {
    fs.readFile(__dirname + "/home.html")
      .then(
        contents => {
          resp.setHeader("Content-Type", "text/html; charset=UTF-8");
          resp.writeHead(200);
          resp.end(contents);
        }
      )
  } else {
    fs.readFile(__dirname + "/cities.json")
      .then(contents => {
        resp.setHeader("Content-Type", "application/json; charset=UTF-8");
        resp.writeHead(200);
        resp.end(contents);
      });
  }
}

const server = http.createServer(requestListener);
const host = "0.0.0.0";
const port = "8080";
server.listen(port, host, () => {
  console.log("Server is running");
});