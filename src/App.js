import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Home from './Home';
import ChatRoom from './ChatRoom';
import socketIO from 'socket.io-client';
import { Grid } from '@mui/material';

const socket = socketIO.connect('http://localhost:5000');

function App() {
  socket.on('connect', () => {localStorage.setItem('socketId', socket.id)});

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh' }}
    >
      <Home />
      <ChatRoom socket={socket} />
    </Grid>
  );
}

export default App;
