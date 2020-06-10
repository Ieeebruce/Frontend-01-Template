const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req)
  res.setHeader("Content-Type", "application/x-www-form-urlencoded");
  res.setHeader("X-Foo", "bar");
  res.writeHead(200, { "Content-Type": "application/x-www-form-urlencoded" });
  res.end("ok");
});

server.listen(9999);
console.log('on')
