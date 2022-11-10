import React from 'react';
import SendIcon from '@mui/icons-material/Send';

import {
  AppBar,
  Box,
  Button,
  TextField,
  Toolbar
} from "@mui/material";
import { Stack } from '@mui/system';

const ChatFields = ({socket}) => {
  const onSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const message = formData.get('message');

    if (message) {
      socket.emit('message', message);
      event.target.reset();
    }
  };

  return (
    <AppBar position="absolute" color="transparent" sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar>
        <Box
          component="form"
          noValidate
          onSubmit={onSubmit}
          sx={{
            my: 2,
            mx: 2,
            width: '100vw'
          }}
        >
          <Stack direction="row" spacing={2}>
            <TextField
              fullWidth
              id="message"
              label="Message"
              name="message"
              autoComplete="off"
              autoFocus
            />
            <Button
              type="submit"
              variant="outlined"
            >
              <SendIcon />
            </Button>
          </Stack>
        </Box>
      </Toolbar>
    </AppBar>
    
  );
};

export default ChatFields;
