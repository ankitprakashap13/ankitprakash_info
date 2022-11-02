import {
  Card,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from "@mui/material";
import { useEffect, useRef } from "react";

const ChatMessages = ({messages}) => {
  const userName = localStorage.getItem('userName');
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behaviour: "smooth" });
    }
  }, [messages]);

  return <List sx={{
      height: '50vh',
      overflowY: 'auto'
    }}>
    {messages?.map((message, index) => {
      return <ListItem key={index}>
        <ListItemText
          primary={message.message}
          secondary={message.name || 'Anynomous'}
          align={(userName == message.name) ? "right" : "left"}
          ref={messages.length - 1 == index ? scrollRef : null}
        />
      </ListItem>;
    })}
  </List>;
};

export default ChatMessages;
