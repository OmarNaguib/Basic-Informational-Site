const port = 8080;

const http = require("http");
const fs = require("fs/promises");
const express = require("express");

const app = express();

const routeToFiles = {
  "/": "index.html",
  "/about": "about.html",
  "/contact-me": "contact-me.html",
};

app.get("/", async (request, response) => {
  response.writeHead(200, { "Content-Type": "text/html" });
  const data = await fs.readFile(`pages/${routeToFiles["/"]}`);
  response.write(data);
});
app.get("/about", async (request, response) => {
  response.writeHead(200, { "Content-Type": "text/html" });
  const data = await fs.readFile(`pages/${routeToFiles["/about"]}`);
  response.write(data);
});
app.get("/contact-me", async (request, response) => {
  response.writeHead(200, { "Content-Type": "text/html" });
  const data = await fs.readFile(`pages/${routeToFiles["/contact-me"]}`);
  response.write(data);
});

app.use(async (request, response) => {
  if (!routeToFiles[request.url]) {
    response.writeHead(404, { "Content-Type": "text/html" });
    const data = await fs.readFile("pages/404.html");
    response.write(data);
  }
});

app.listen(port);

// const server = http.createServer(async (request, response) => {
//   if (routeToFiles[request.url]) {
//     response.writeHead(200, { "Content-Type": "text/html" });
//     const data = await fs.readFile(`pages/${routeToFiles[request.url]}`);
//     response.write(data);
//   } else {
//     response.writeHead(404, { "Content-Type": "text/html" });
//     const data = await fs.readFile("pages/404.html");
//     response.write(data);
//   }
//   response.end();
// });

// server.listen(port);
