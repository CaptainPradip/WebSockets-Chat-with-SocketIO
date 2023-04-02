const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connect", (socket) => {
  socket.on("send", (msg) => {
    io.emit("received", msg);
  });
});

http.listen(port, () => {
  console.log(`The WebSocket server running at http://localhost:${port}/`);
});
