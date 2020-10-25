const http = require("http");
const socket = require("socket.io");

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end();
});

const io = socket(server);

exports.listen = async (port) => {
  await server.listen(port);
};

exports.io = io;
