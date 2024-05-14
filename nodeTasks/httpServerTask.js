const http = require("node:http");
const { parse } = require("querystring");
const url = require("node:url");

const database = [];
const PORT = 3000;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (req.method == "GET" && req.url == "/") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Welcome to my node js server");
  } else if (req.method == "POST" && req.url == "/users") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      const newData = parse(body);
      database.push(newData);
      res.writeHead(200, { "content-type": "text/plain" });
      res.end("User added Successfuly");
      console.log(database);
    });
  } else if (req.method == "PUT" && parsedUrl.pathname.startsWith("/users/")) {
    const userId = parseInt(parsedUrl.pathname.split("/")[2]);
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      const updatedUser = parse(body);
      database[userId] = { ...database[userId], ...updatedUser };
      res.writeHead(200, { "content-type": "text/plain" });
      res.end("User data is updated successfuly!");
    });
  } else if (req.method == "DELETE" && req.url == "/users/") {
    const userId = parseInt(parsedUrl.pathname.split("/")[2]);
    database.splice(userId, 1);
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("User deleted successfully!");
  } else if (req.method == "PATCH" && "/users/") {
    const userId = parseInt(parsedUrl.pathname.split("/")[2]);
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      const updatedUser = parse(body);
      database[userId] = { ...database[userId], ...updatedUser };
      res.writeHead(200, { "content-type": "text/plain" });
      res.end("User details partially updated!");
    });
  } else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("page not found");
  }
});

server.listen(PORT, () => {
  console.log(`The server is running at port ${PORT}`);
});
