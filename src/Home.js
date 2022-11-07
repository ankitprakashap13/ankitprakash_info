import { Box, Grid, Link, Typography } from "@mui/material";
import DescriptionIcon from '@mui/icons-material/Description';
import { Stack } from "@mui/system";
import ChatRoom from "./ChatRoom";

const Home = () => {
  return <Box sx={{
    my: 0,
    mx: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }}>
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{
        height: '100vh',
        color: '#fff',
        backgroundColor: `#4158D0`,
        backgroundImage: 'linear-gradient(to top, #ff9800 0%, rgb(2 156 176) 100%)'
      }}
    >
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{
          height: '30vh',
          color: 'rgb(255, 255, 255)',
          backgroundColor: 'rgb(0 0 12)',
          backgroundImage: 'url(11861484-5787-483A-B3DE-DC7149DF1DDA.jpg)',
          backgroundSize: 'contain',
          backgroundPosition: '100% 0',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <Stack direction="row" spacing={5} alignItems="center">
          <Typography variant="h5">Hi, I'm</Typography>
          <Typography variant="h3">ANKIT PRAKASH</Typography>
          {/* <Link underline="none" rel="noopener" target="_blank" href="https://docs.google.com/document/d/1JqTxAiJqapYk-NC5dPnOgQGvhmhfsMA2nQRXpEU3lug/edit?usp=sharing" title="CV icons">
            <Stack direction="row" spacing={1}>
              <DescriptionIcon />
              <span>Resume</span>
            </Stack>
          </Link> */}
        </Stack>
      </Grid>
    </Grid>
    <ChatRoom />
  </Box>;
};

export default Home;