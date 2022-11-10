import React, { useEffect, useRef, useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Typography
} from "@mui/material";

const ChatMessages = ({socket}) => {
  const [messages, setMessages] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    socket.on('messageResponse', (message, user) => setMessages([...messages, {message, user,  type: "user"}]));
  }, [socket, messages]);

  useEffect(() => {
    socket.on(
      'newUserResponse',
      (allUsers, currentUser) => {
        if (currentUser && currentUser.name) {
          setMessages(
            [
              ...messages, 
              {
                message: (currentUser.socketId === socket.id) ? "You have joined" : `${currentUser.name} has joined`,
                user: currentUser,
                type: "admin",
            }]
          )
        }
      }
    );
  }, [socket, messages]);

  useEffect(() => {
    socket.on(
      'disconnectResponse',
      (allUsers, currentUser) => {
        if (currentUser && currentUser.name) {
          setMessages(
            [
              ...messages, 
              {
                message: (currentUser.socketId === socket.id) ? "You are disconnected" : `${currentUser.name} has left`,
                user: currentUser,
                type: "admin",
            }]
          )
        }
      }
    );
  }, [socket, messages]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behaviour: "smooth" });
    }
  }, [messages]);

  return <List sx={{
      overflowY: 'auto'
    }}>
    {
      (messages && messages.length) ?
      messages.map((message, index) => {
        return <ListItem key={index}>
          <ListItemText
            primary={message.message}
            secondary={(message.type !== "admin") && (message.user ? message.user.name : 'Anynomous')}
            align={
              message.type === 'admin' ? "center" : ( (message.user && (socket.id === message.user.socketId)) ? "right" : "left")
            }
            ref={messages.length - 1 === index ? scrollRef : null}
          />
        </ListItem>;
      }) :
      <Typography align="center">Send some message</Typography>
    }
  </List>;
};

export default ChatMessages;
