const port = 8080;

const http = require("http");
const fs = require("fs/promises");

const routeToFiles = {
  "/": "index.html",
  "/about": "about.html",
  "/contact-me": "contact-me.html",
};

const server = http.createServer(async (request, response) => {
  if (routeToFiles[request.url]) {
    response.writeHead(200, { "Content-Type": "text/html" });
    const data = await fs.readFile(`pages/${routeToFiles[request.url]}`);
    response.write(data);
  }
  response.end();
});

server.listen(port);
