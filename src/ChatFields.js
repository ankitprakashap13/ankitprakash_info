import SendIcon from '@mui/icons-material/Send';

import {
  Box,
  Button,
  TextField
} from "@mui/material";
import { Stack } from '@mui/system';

const ChatFields = ({socket}) => {
  let userName = localStorage.getItem('userName');

  const onSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const message = formData.get('message');

    if (message) {
      socket.emit('message', message, userName);
      event.target.reset();
    }
  };

  return (
    <Box
      sx={{
        my: 2,
        mx: 2,
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Box component="form" noValidate onSubmit={onSubmit}>
        <Stack direction="row" spacing={2}>
          <TextField
            fullWidth
            id="message"
            label="Message"
            name="message"
            autoComplete="off"
            autoFocus
            sx={{
              minWidth: 500
            }}
          />
          <Button
            type="submit"
            variant="outlined"
          >
            <SendIcon />
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default ChatFields;
