const http = require('http');

const server = http.createServer((req, res) => {

  const url = req.url;
  if (url === '/') {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(' <h1>Welcome Brothers</h1><br/><h1>Home Page</h1><br/><a href="/about">About</a><br/><a href="/contact">Contact</a>');

  } else if (url === '/about') {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write('<h1>About Page</h1>');

  } else if (url === '/contact') {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write('<h1>Contact Page</h1> ');

  }
  res.end();
})



server.listen(5000, () => {
  console.log("Server is running on port 3000");
});