import React, { useEffect, useRef } from "react";
import {
  List,
  ListItem,
  ListItemText
} from "@mui/material";

const ChatMessages = ({messages}) => {
  const userName = localStorage.getItem('userName');
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behaviour: "smooth" });
    }
  }, [messages]);

  return <List sx={{
      minHeight: '20vh',
      maxHeight: '50vh',
      width: '380px',
      overflowY: 'auto'
    }}>
    {messages && messages.map((message, index) => {
      return <ListItem key={index}>
        <ListItemText
          primary={message.message}
          secondary={message.name || 'Anynomous'}
          align={(userName === message.name) ? "right" : "left"}
          ref={messages.length - 1 === index ? scrollRef : null}
        />
      </ListItem>;
    })}
  </List>;
};

export default ChatMessages;
