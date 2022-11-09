import React from 'react';
import { Button, Card, Collapse, Fab, Grid, Slide, Switch, TextField } from '@mui/material';
import { Box, Stack } from '@mui/system';
import { useEffect, useState } from 'react';
import ChatFields from './ChatFields';
import ChatMessages from './ChatMessages';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import socketIO from 'socket.io-client';

const socket = socketIO.connect('https://ankitprakash.info', {
  path: '/chatsocket'
});
// const socket = socketIO.connect('http://localhost:3000');

const ChatRoom = () => {
  socket.on('connect', () => {localStorage.setItem('socketId', socket.id)});
  const [messages, setMessages] = useState([]);
  const [chatRoomOpen, setCharRoomOpen] = useState(false);
  const [userNameInputOpen, setuserNameInputOpen] = useState(false);
  const [joinChatRoomButton, setJoinChatRoomButton] = useState(true);
  const [showRoom, setShowRoom] =useState(true);

  useEffect(() => {
    socket.on('messageResponse', (message, userName) => setMessages([...messages, {message, name: userName}]));
  }, [socket, messages]);

  const fab = {
    sx: {
      position: 'absolute',
      bottom: 16,
      right: 16
    }
  };

  const onUserSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const userName = formData.get('userName');
    
    localStorage.setItem('userName', userName);
    socket.emit('newUser', userName);

    setJoinChatRoomButton(false);
    setuserNameInputOpen(false);
    setCharRoomOpen(true);

    event.target.reset();
  };

  const openJoinRoom = () => {
    setJoinChatRoomButton(false);
    setuserNameInputOpen(true);
    setCharRoomOpen(false);
  };

  return <Grid sx={fab.sx}>
    <Card variant="elevation" elevation={24} square>
        {joinChatRoomButton &&
          <Fab
            variant="extended"
            sx={{
              position: 'absolute',
              bottom: 50,
              right: 50,
              width: 250
            }}
            onClick={openJoinRoom}
          >
            <Stack direction="row" spacing={1}>
              <PersonAddIcon />
              <div>Join my Chatroom</div>
            </Stack>
          </Fab>
        }
        {userNameInputOpen &&
          <Box
            component="form"
            variant="extended"
            sx={{
              position: 'absolute',
              bottom: 50,
              right: 50,
            }}
            noValidate
            onSubmit={onUserSubmit}
          >
            <Stack
              direction="row"
              spacing={1}
            >
              <TextField
                sx={{
                  width: 250
                }}
                name="userName"
                label="Your Name"
                autoComplete="off"
                autoFocus
              />
              <Button
                type="submit"
                variant="outlined"
              >
                <PersonAddIcon />
              </Button>
            </Stack>
          </Box>
        }
        {
          chatRoomOpen && <>
            <Switch checked={showRoom} onChange={() => setShowRoom(!showRoom)} />
            <Collapse direction="up" in={showRoom} mountOnEnter unmountOnExit>
              <ChatMessages messages={messages} />
              <ChatFields socket={socket} />
            </Collapse>
          </>
        }
    </Card>
  </Grid>;
};

export default ChatRoom;
