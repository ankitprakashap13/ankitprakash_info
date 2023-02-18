import React, { useEffect, useState } from 'react';
import { Button, Container, Grid, LinearProgress } from '@mui/material';
import ChatFields from './ChatFields';
import ChatMessages from './ChatMessages';
import socketIO from 'socket.io-client';
import ChatUsers from './ChatUsers';

const socket = socketIO.connect(process.env.REACT_APP_CHAT_DOMAIN, {
  path: '/chatsocket'
});

const ChatRoom = () => {
  const [chatConnected, setChatConnected] = useState(false);
  useEffect(() => {
    socket.on('connect', () => {
      setChatConnected(true)
    });
  }, [socket, chatConnected]);

  return (
    <Container maxWidth="lg">
      <Button
        href='/'
        variant="outlined" color="error"
        sx={{
          position: {sm: 'fixed', xs: 'relative'},
          zIndex: "1",
          top: {sm: 10, xs: 10},
          right: {sm: 10, xs: -15}
        }}
      >
        Leave
      </Button>
      {
        (socket.id && chatConnected) ?
        <Grid container={true} height="100vh" >
          <Grid item sm={4} xs={12} sx={{
              backgroundColor: "#f1f8e9",
              boxShadow: "inset -1px 0px 4px 0px #333"
            }}>
            <ChatUsers socket={socket} />
          </Grid>
          <Grid item sm={8} xs={12} position="relative">
            <ChatMessages socket={socket} />
            <ChatFields socket={socket} />
          </Grid>
        </Grid>
        : <LinearProgress />
      }
    </ Container>
  );
};

export default ChatRoom;
