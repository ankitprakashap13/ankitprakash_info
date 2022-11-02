const express = require('express');
const app = express();
const path = require("path");

const PORT = process.env.PORT || 5000;

const server = require('http').Server(app);

const socketIO = require('socket.io')(server);

let users = []; // {userName, socketId}
socketIO.on('connection', (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);

  socket.on('newUser', (data) => {
    users.push(data);
    socket.broadcast.emit('newUserResponse', users);
  });

  socket.on('message', (message, userName) => {
    console.log(`messageResponse`, message, userName);
    socketIO.emit('messageResponse', message, userName);
  });

  socket.on('disconnect', () => {
    console.log(`🔥: A user (${socket?.id && socket.id}) disconnected`);
    users = users.filter((user) => user.socketId !== socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});
