const http = require("http");
const host = 'localhost';
const port = 8000;
const requestListener = function(request, response) {
  response.writeHead(200);
  response.end("My first server!")
};
const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
