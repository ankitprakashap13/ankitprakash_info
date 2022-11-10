import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button, Stack, TextField } from "@mui/material";
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

const ChatUsers = ({socket}) => {
  const [users, setUsers] = useState([]);
  const [showNameField, setShowNameField] = useState(true);


  useEffect(() => {
    socket.on(
      'connectedResponse',
      (allusers, currentUser) => {
        console.log("connectedResponse");
        setUsers(Object.keys(allusers).map((id) => ({id, name: allusers[id].name})));
      }
    );
  }, [socket, users]);

  useEffect(() => {
    socket.on(
      'disconnectResponse',
      (allusers, currentUser) => {
        console.log("connectedResponse");
        setUsers(Object.keys(allusers).map((id) => ({id, name: allusers[id].name})));
      }
    );
  }, [socket, users]);

  useEffect(() => {
    socket.on(
      'newUserResponse',
      (allusers, currentUser) => {
        setUsers(Object.keys(allusers)
          .map((id) => {
            return {
              id: id, name: socket.id === allusers[id].socketId ? `${allusers[id].name} (You)` : allusers[id].name
            }
          })
        );
      }
    )
  }, [socket, users]);

  const onUserSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userName = formData.get('userName');
    
    socket.emit('newUser', userName);

    event.target.reset();
    setShowNameField(false);
  };

  return <>
    {showNameField &&
      <Box
        component="form"
        noValidate
        onSubmit={onUserSubmit}
        padding={2}
      >
        <Stack
          direction="row"
          spacing={1}
        >
          <TextField
            fullWidth
            name="userName"
            label="Set your Name"
            autoComplete="off"
            autoFocus
          />
          <Button
            type="submit"
            variant="outlined"
          >
            <TrendingFlatIcon />
          </Button>
        </Stack>
      </Box>
    }
    {!showNameField && <DataGrid
      rows={users}
      columns={[{field: "name", headerName: `Users (${users.length})`}]}
      hideFooterPagination
      disableColumnMenu
    />}
  </>;
};

export default ChatUsers;
