import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField } from "@mui/material";
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

const ChatUsers = ({socket}) => {
  const [users, setUsers] = useState([]);
  const [showNameField, setShowNameField] = useState(true);
  const [open, setOpen] = React.useState(true);

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
      <Dialog
        fullScreen={"md"}
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Let users know who you are?"}
        </DialogTitle>
        <DialogContent>
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
                sx={{
                  backgroundColor: "#f1f8e9"
                }}
              />
              <Button
                type="submit"
                variant="outlined"
                onClick={() => setOpen(false)}
              >
                <TrendingFlatIcon />
              </Button>
            </Stack>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} autoFocus>
            Continue without name
          </Button>
        </DialogActions>
      </Dialog>
      
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
