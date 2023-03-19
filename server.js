const express = require('express');
const app = express();
const path = require("path");
var cors = require('cors');
app.use(cors());

const PORT = process.env.PORT || 5000;

const server = require('http').Server(app);

const socketIO = require('socket.io')(server, {
  path: '/chatsocket',
  cors: {
    origin: ["http://localhost:3000", "https://ankitprakash.online"]
  }
});

let users = {}; // {name, socketId}
socketIO.on('connection', (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);
  socketIO.emit('connectedResponse', users, users[socket.id]);

  socket.on('newUser', (name) => {
    let data = {name, socketId: socket.id};
    users[socket.id] = data;
    socketIO.emit('newUserResponse', users, data);
  });

  socket.on('message', (message) => {
    socketIO.emit('messageResponse', message, users[socket.id]);
  });

  socket.on('disconnect', () => {
    console.log(`🔥: A user (${socket?.id && socket.id}) disconnected`);
    disconnectedUser = users[socket?.id];
    delete users[socket?.id]
    disconnectedUser && socketIO.emit('disconnectResponse', users, disconnectedUser);
  });
});

server.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});
